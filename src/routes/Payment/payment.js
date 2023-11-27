const express = require("express");
const router = express.Router();



router.post('/create-payment-intent' ,async (req, res) => {
    const { price } = req.body;
    const amount = parseInt(price * 100)
    console.log(amount, " amount inside")

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card']

    })
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }) 

module.exports = router ;