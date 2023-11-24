const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;





app.get('/', async (req, res) => {
    res.send('check my server health')
})







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

    app.listen(port, async (req, res) => {
        console.log(`listening on ${port}`);
    });
}
main()