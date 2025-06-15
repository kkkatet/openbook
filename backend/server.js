const products = [
   {
    id: 1,
    name: 'Знакомство с убийцей',
    cost: 34,
    count: 100,
    image: 'https://cv2.litres.ru/pub/c/cover_330/70740220.webp',
    text: 'То Кёнсу, успешный и уважаемый криминальный психолог, специализирующийся на профилировании личностей преступников, приходит в себя в странной комнате, похожей на тюремную камеру. Его последнее воспоминание – авария на пустынной горной дороге. Он почувствовал, как его схватили, вкололи какое-то вещество и... темнота.',
    new: 'Новинка',
    sale: 0,
    author: 'Но Хёду'
  },
  {
    id: 2,
    name: 'God of Fury',
    cost: 30,
    count: 100,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNr9nokjWbzZ3hTlYVX36wsitRKRchWfnWloNCS1Sbnhy5iDO',
    text: 'Я привлекла внимание монстра, хотя и не просила об этом. Даже не ожидала, что такое произойдет. Но теперь уже слишком поздно. Киллиан Карсон – хищник, обладающий неповторимым очарованием. Он хладнокровный, жестокий манипулятор. Самое страшное, что никто не видит его дьявольскую сторону. Никто, кроме меня. И поэтому меня ждет расплата. Я убегаю. Но знаете кое-что о монстрах? Они всегда догоняют.',
    new: 'Новинка',
    sale: 0,
    author: 'Рина Кент'
  },
  {
    id: 3,
    name: 'Три года в аду. Как Светлана Богачева украла мою жизнь',
    cost: 27,
    count: 100,
    image: 'https://cv0.litres.ru/pub/c/cover_415/70731301.webp',
    text: 'В конце 2022 года российский интернет взорвался от истории стендап-комика Тани Щукиной: девушка призналась, что стала жертвой своей подруги Светланы Богачевой. Таня три года одалживала ей огромные суммы на лечение, круглосуточно ухаживала за ней, общалась с ее врачом, психотерапевтом и названой дочкой и оказывала поддержку после смерти близких..',
    new: 'Новинка',
    sale: 0,
    author: 'Таня Щукина'
  },
  {
    id: 4,
    name: 'Лиллехейм. Волчий ветер',
    cost: 40,
    count: 100,
    image: 'https://s1.livelib.ru/boocover/1008326869/200x305/67be/boocover.jpg',
    text: 'Между высокими скалами и холодным морем расположился тихий норвежский городок. Русская семья, приехавшая в Лиллехейм, радуется невероятной красоте севера и гостеприимству местных жителей, и впереди у всех – спокойное, по-своему интересное лето... ',
    new: 'Новинка',
    sale: 0,
    author: 'Николай Ободников'
  },
  {
    id: 5,
    name: 'Убийство в городе без имени',
    cost: 20,
    count: 100,
    image: 'https://s1.livelib.ru/boocover/1008485845/200x305/b3d6/boocover.jpg',
    text: 'Школьный учитель Эйити Камио обнаружен убитым на заднем дворе собственного дома под завалом из картонных коробок. Он одет в выходной костюм, но на нем нет обуви. В доме все вверх дном, но ничего не пропало. И вот что особенно загадочно... Причина смерти – пережатие сосудов на шее; его задушили, но никаких следов ни пальцев, ни веревки, ни чего-либо подобного просто нет. Полиция в тупике..',
    new: 'Новинка',
    sale: 0,
    author: 'Кэйго Хигасино'
  },
  {
    id: 6,
    name: '451 градус по Фаренгейту',
    cost: 27,
    count: 100,
    image: 'https://img3.labirint.ru/rc/6445287330f69f749824da9e16c381ab/363x561q80/books56/556173/cover.jpg?1565703130',
    text: 'Во время очередного рейда по наводке информаторши Клариссы «пожарные» находят невероятно большую библиотеку, и служащий Гай Монтэг из любопытства оставляет одну книгу себе. Немного почитав и подружившись с Клариссой, парень начинает сомневаться в правильности своей жизни.',
    new: 'Новинка',
    sale: 0,
    author: 'Рэй Брэдбери'
  },
  {
    id: 7,
    name: 'Маленькие женщины',
    cost: 14,
    count: 100,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKbZKiu9DbY5ZuYzi27OqGNqPfuzo4pte3g&s',
    text: 'В "Маленьких женщинах" рассказана история четырех дружных, непохожих друг на друга сестер: романтичной Мег, взбалмошной Джо, тихони Бет и своенравной Эми. Вместе с матерью дожидаясь возвращения отца с войны, девочки проходят непростой путь взросления, на котором им встречаются лишения и награды, смертельные опасности и бескорыстная помощь, ложные ориентиры и настоящие друзья.',
    new: '',
    sale: 0,
    author: 'Луиза Мэй Олкотт'
  },
  {
    id: 8,
    name: 'Энн из Зелёных крыш',
    cost: 23,
    count: 100,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TqhzV2j8hMt3I-m2PkNN-5IVrW4EHACc-g&s',
    text: 'Люси Мод Монтгомери (1874-1942) – канадская писательница, известная прежде всего благодаря своим романам об Энн Ширли, рыжеволосой девочке-сироте, случайно попавшей из приюта на ферму к пожилым брату и сестре Марилле и Мэтью Касбертам.',
    new: 'Новинка',
    sale: 0,
    author: 'Люси Мод Монтгомери'
  },
  {
    id: 9,
    name: 'Убить пересмешника',
    cost: 25,
    count: 100,
    image: 'https://ir.ozone.ru/s3/multimedia-0/c1000/6008637408.jpg',
    text: 'Главная героиня романа – десятилетняя девочка Джин Финч, которая живет со своей семьей в небольшом городке американского юга. События книги рассказываются от ее лица. Каждая глава пропитана теплом, любовью и юмором – и вместе с тем Харпер Ли говорит с читателями на очень серьезные темы, такие как ксенофобия, расизм, нетерпимость и ханжество. Отец Джил, Аттикус, защищавший в суде чернокожего парня в те времена, когда это было попросту немыслимо, стал настоящим символом, великолепным примером честного и принципиального адвоката, ставящем справедливость превыше всего.',
    new: '',
    sale: 10,
    author: 'Харпер Ли'
  },
  {
    id: 10,
    name: 'Маленький принц',
    cost: 30,
    count: 100,
    image: 'https://img3.labirint.ru/rc/ab8aeade00e5e03d92372d7a62cfe00c/363x561q80/books81/805209/cover.jpg?1623760204',
    text: '"Все мы родом из детства", – напоминает писатель и знакомит нас с самым загадочным, трогательным и бесконечно хрупким существом по имени Маленький принц. При всей своей беззащитности, Маленький принц непримирим к жадности и честолюбию. Перед силой его доброты и простодушной мудрости отступает даже сама желтая змейка – смерть, пока Маленький принц не призывает ее к себе, чтобы такой ценой спасти любимое существо, которое он приручил.',
    new: '',
    sale: 11,
    author: 'Антуан де Сент-Экзюпери'
  },
  {
    id: 11,
    name: 'Медвежий угол',
    cost: 30,
    count: 100,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXK4907vMs5CjLL0crfeSjwBRqq1NXmb0pg&s',
    text: 'Книга, совершенно не похожая на предыдущие книги Бакмана. Здесь нету того юмора, как в книгах про Уве или сумасшедшую бабушку. Эта книга про настоящую жизнь, где больно и страшно. Где в окнам не горит свет, но никто не спит. О городе где нельзя жить, можно только выживать. Тяжелая и глубокая книга, не дает от себя оторваться до последней страницы. В голове остается много мыслей, снова и снова. Наверное, она не расскажет ни о чем новом, но тем не менее заставит задуматься о том, что мы обычно прячем за более легкими темами и "мелкими" проблемами... Хочешь кофе?..',
    new: 'Новинка',
    sale: 0,
    author: 'Фредрик Бакман'
  },
  {
    id: 12,
    name: 'Дракула',
    cost: 18,
    count: 100,
    image: 'https://s3-goods.ozstatic.by/2000/704/133/101/101133704_0.jpg',
    text: 'Стокеру удалось на основе различных мифов создать свой новый, необычайно красивый мир, простирающийся от Средних веков до наших дней, от загадочной Трансильвании до уютного Лондона. А главное – создать нового мифического героя. Героя на все времена.',
    new: 'Новинка',
    sale: 0,
    author: 'Брэм Стокер'
  },
  {
    id: 13,
    name: 'Цвет пурпурный',
    cost: 25,
    count: 100,
    image: 'https://img4.labirint.ru/rc/1c5c5acba2590a648a2e5ec7fe815c77/85x130q80/books79/780080/cover.jpg?1607145905',
    text: 'Унижения, боль, насилие, бесправие — такова была судьба темнокожей женщины Глубокого Юга в начале прошлого века. Такова судьба главной героини романа Сили. Ей приходилось играть роль покорной служанки жестокого отца, разлучившего ее с детьми и любимой сестрой, а потом забитой жены-рабыни сурового мужа…',
    new: '',
    sale: 10,
    author: 'Элис Уокер'
  },
  {
    id: 14,
    name: '1984',
    cost: 22,
    count: 100,
    image: 'https://i0.wp.com/obeygiant.com/images/2015/07/poster_1984_lrg.jpg?fit=416%2C680&ssl=1',
    text: 'Роман-антиутопия, описывающий тоталитарное общество, где наблюдают за каждым шагом человека. Главный герой, Уинстон Смит, работает в Министерстве правды, занимаясь фальсификацией исторических событий. Он решает бороться с системой, но сталкивается с тяжелыми последствиями.',
    new: '',
    sale: 5,
    author: 'Джордж Оруэлл'
  },
  {
    id: 15,
    name: 'Преступление и наказание',
    cost: 28,
    count: 100,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5c6lQgPm4FAGEJBnpl0aNrzPl-gAh3sX5Q&s',
    text: 'Роман, рассказывающий историю Родиону Раскольникову, студенту, который решает убить старую ростовщицу. Его внутренние терзания, попытки оправдать свои поступки и последствия, к которым приводит его решение, стали основой философских размышлений о добре и зле.',
    new: '',
    sale: 0,
    author: 'Фёдор Достоевский'
  },
  {
    id: 16,
    name: 'Гордость и предубеждение',
    cost: 21,
    count: 100,
    image: 'https://basket-01.wbbasket.ru/vol21/part2135/2135768/images/big/1.webp',
    text: 'Роман о любви, социальной изоляции и классовых различиях в Англии начала XIX века. Главная героиня, Элизабета Беннет, сталкивается с гордостью и предвзятостью, пытаясь найти свою любовь в обществе, где социальный статус и деньги играют огромную роль.',
    new: 'Новинка',
    sale: 0,
    author: 'Джейн Остин'
  },
  {
    id: 17,
    name: 'Тень ветра',
    cost: 25,
    count: 100,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65EoiDrAt2z-Zb0itGRWjdVo5ReLOIvoXqw&s',
    text: 'Роман, который сочетает элементы мистики и триллера, в центре которого находится молодой Даниэль, который открывает таинственную книгу автора, имя которого незнакомо, но вскоре понимает, что эта книга может разрушить всю его жизнь.',
    new: '',
    sale: 0,
    author: 'Карлос Руис Сафон'
  }
];
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
    origin: '*'
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

app.options('/api/books', cors());
app.get('/api/books', (req, res) => {
  res.json(products);
});

let bookRequests = [];

app.options('/api/book-requests', cors());
app.post('/api/book-requests', (req, res) => {
  const newBookRequest = req.body;
  bookRequests.push(newBookRequest);
  res.status(201).json({ message: 'Book request submitted successfully' });
});

app.options('/api/book-requests', cors());
app.get('/api/book-requests', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') {
 return res.sendStatus(403);
  }
  res.json(bookRequests);
});

app.options('/api/approve-book/:id', cors());
app.post('/api/approve-book/:id', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') {
 return res.sendStatus(403);
  }

  const bookId = parseInt(req.params.id);
  const bookIndex = bookRequests.findIndex(book => book.id === bookId);

  if (bookIndex === -1) {
 return res.status(404).json({ message: 'Book request not found' });
  }

  const [approvedBook] = bookRequests.splice(bookIndex, 1);
  products.push(approvedBook);
  res.json({ message: 'Book approved and added to products' });
});

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
