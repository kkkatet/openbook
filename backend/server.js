require('dotenv').config()
console.log('CLIENT_ID:', process.env.CLIENT_ID)
const express = require('express')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4001

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
)
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:4000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)

let users = []

app.options('/register', cors())
app.post('/register', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  const existingUser = users.find(user => user.email === email)
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' })
  }

  const newUser = { email, password }
  users.push(newUser)

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })

  res.status(201).json({ token })
})
app.options('/login', cors())
app.post('/login', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  if (email === 'admin@openbook.com' && password === '12345678') {
    const token = jwt.sign(
      { email, role: 'admin' },
      process.env.JWT_SECRET || 'some-secret',
      {
        expiresIn: '1h'
      }
    )

    res.json({ token })
  }

  const user = users.find(u => u.email === email && u.password === password)
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET || 'some-secret', {
    expiresIn: '1h'
  })

  res.json({ token })
})

app.options('/protected', cors())
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is protected data', user: req.user })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.JWT_SECRET || 'some-secret', (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }
    req.user = user
    next()
  })
}

app.options('/check-auth', cors())
app.get('/check-auth', authenticateToken, (req, res) => {
  if (req.user.email === 'admin@openbook.com') {
    res.json({ email: req.user.email, role: 'admin' })
    return
  }
  res.json({ email: req.user.email })
})

app.options('/send-email', cors())
app.post('/send-email', async (req, res) => {
  console.log(process.env)
  try {
    const { name, email } = req.body
    const accessToken = await oAuth2Client.getAccessToken()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'core.such.react@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token
      }
    })

    const mailOptions = {
      from: 'core.such.react@gmail.com',
      to: email,
      subject: 'Подтверждение заказа',
      text: `
            Здравствуйте, ${name}!
            Ваш заказ успешно оформлен.
            Спасибо, что выбрали наш книжный магазин!
            `
    }

    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Письмо успешно отправлено' })
  } catch (error) {
    console.error('Ошибка при отправке письма:', error)
    res.status(500).json({ message: 'Ошибка при отправке письма' })
  }
})

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
