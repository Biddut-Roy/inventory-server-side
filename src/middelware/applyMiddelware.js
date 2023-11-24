const cors = require('cors');
const express = require('express');
const { LOCAL_CLIENT_URL, CLIENT } = require('../coonfig/default');




const applyMiddelware = (app) => {

app.use(cors({
    origin: [
        LOCAL_CLIENT_URL,
        CLIENT
    ],
    credentials: true,
}));
app.use(express.json());
};

module.exports = applyMiddelware