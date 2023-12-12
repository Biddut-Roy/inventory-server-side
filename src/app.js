const express = require('express');
const applyMiddelware = require('./middelware/applyMiddelware');
// const connectDB = require('./db/connectDB');
const app = express();
// const port = process.env.PORT || 5000;


const authenticationRoute = require('./routes/authentication/index')
const User = require('./routes/Users/userIndex')
const review = require('./routes/Testiminial/Review')
const shop = require('./routes/Create Shop/shop')
const product = require('./routes/Create Shop/product/product')
const updateProduct = require('./routes/Create Shop/updateProduct/update')
const checkOut = require('./routes/Create Shop/check-Out/checkout')
const payment = require('./routes/Payment/payment')
const PaymentUpdate  = require('./routes/Payment/paymentUpdate')
const admin = require("./routes/authentication/adminVerify")
const storeAdminVerify = require('./routes/authentication/storeAdminVerify')
const summry = require('./routes/Create Shop/summery/summry')
const mailer = require('./routes/NodeMailer/mailer')

app.get('/', async (req, res) => {
    res.send('check my server health')
})



applyMiddelware(app)

app.use(admin)
app.use(storeAdminVerify)
app.use(authenticationRoute)
app.use(User)
app.use(review)
app.use(shop)
app.use(product)
app.use(updateProduct)
app.use(checkOut)
app.use(payment)
app.use(PaymentUpdate)
app.use(summry)
app.use(mailer)





app.all('*', async (req, res, next) => {
    const error = new Error(`let get e error url : ${req.url}`);
    error.status = 404
    next(error);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})


// const main = async () => {
//     await connectDB()
//     app.listen(port, async (req, res) => {
//         console.log(`listening on ${port}`);
//     });
// }
// main()

module.exports = app ;