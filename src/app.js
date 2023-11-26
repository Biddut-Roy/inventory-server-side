const express = require('express');
const applyMiddelware = require('./middelware/applyMiddelware');
const connectDB = require('./db/connectDB');
const app = express();
const port = process.env.PORT || 5000;


const authenticationRoute = require('./routes/authentication/index')
const User = require('./routes/Users/userIndex')
const review = require('./routes/Testiminial/Review')
const shop = require('./routes/Create Shop/shop')
const product = require('./routes/Create Shop/product/product')
const updateProduct = require('./routes/Create Shop/updateProduct/update')

app.get('/', async (req, res) => {
    res.send('check my server health')
})



applyMiddelware(app)
app.use(authenticationRoute)
app.use(User)
app.use(review)
app.use(shop)
app.use(product)
app.use(updateProduct)





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


const main = async () => {
    await connectDB()
    app.listen(port, async (req, res) => {
        console.log(`listening on ${port}`);
    });
}
main()