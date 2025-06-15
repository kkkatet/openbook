require('dotenv').config({ path: './src/.env' });
console.log('CLIENT_ID:', process.env.CLIENT_ID);
const express = require('express');
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4001',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.options('/send-email', cors());
app.post('/send-email', async (req, res) => {
    console.log(process.env);
    try {
        const {name, email} = req.body;
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'core.such.react@gmail.com',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken.token
            },
        });

        const mailOptions = {
            from: 'core.such.react@gmail.com',
            to: email,
            subject: "Подтверждение заказа",
            text: `
            Здравствуйте, ${name}!
            Ваш заказ успешно оформлен.
            Спасибо, что выбрали наш книжный магазин!
            `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "Письмо успешно отправлено"});
    }
        catch (error) {
            console.error("Ошибка при отправке письма:", error);
            res.status(500).json({message: "Ошибка при отправке письма" });
    }
});

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));