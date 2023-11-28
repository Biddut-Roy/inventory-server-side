const nodemailer = require("nodemailer");
require("dotenv").config();


const mailer = async (req, res) => {
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAILER_GMAIL,
        pass: process.env.MAILER_PASSWORDS,
    },
});

async function main() {
  
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" virjxmvqlm@wireconnected.com', 
    to: "bar@example.com, baz@example.com", 
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);

}
main().catch(console.error);

res.send('mail send ho gaya')
}

module.exports = mailer ;