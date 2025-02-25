const express = require('express');
const transporter = require('../mail/mail.js');
const mailRouter = express.Router();
console.log("📌 Route /email chargée !");

mailRouter.post('/email', async (req, res) => {
  
  const { name, email, message } = req.body;

  let mailOptions = {
    from: process.env.SMTP_USERNAME, 
    to: 'landrydupont790@gmail.com',
    subject: `Message de ${name} - ${email}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé avec succès !");
    res.status(200).send("E-mail envoyé avec succès.");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = mailRouter;
