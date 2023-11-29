const nodemailer = require("nodemailer");
require("dotenv").config();


const mailer = async (req, res) => {

  const body = req.body;
  console.log(body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: process.env.MAILER_GMAIL,
      pass: process.env.MAILER_PASSWORDS,
    },
  });

  async function main() {

    const info = await transporter.sendMail({
      from: `"IMS Limited 👻" ${body?.mail}`,
      to: `${body?.mail}`,
      subject: "Hello ✔ Admin",
      text: `${body?.field}`,
      html: `<b>${body?.field}</b>`,
    });

    console.log("Message sent: %s", info.messageId);

  }
  main().catch(console.error);

  res.send({ send: true })
}

module.exports = mailer;