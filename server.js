import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());//JSONボディのパースを有効化

app.use(express.static('public'));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raita.5006@gmail.com',
        pass: 'mesk xmzx yuka qzun',
    },
});


app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.post('/api/send-email', async (req, res) => {
    const { email, message } = req.body;
    try {
        await transporter.sendMail({
            from: email,
            to: 'raita.5006@gmail.com',
            subject: 'メールフォームからのメッセージ',
            text: message,
        });
        res.status(200).json({message: 'メールを送信しました'});
    } catch (error) {
        console.error('メール送信エラー', error);
        res.status(500).json({ message: 'メールの送信に失敗しました'});
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});