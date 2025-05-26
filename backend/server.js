const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: `Nova proposta de ${name}`,
  html: `
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>Email do remetente:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${phoneNumber}</p>
    <p><strong>Mensagem:</strong><br/>${message}</p>
  `,
};

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao enviar email." });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 5000}`);
});

