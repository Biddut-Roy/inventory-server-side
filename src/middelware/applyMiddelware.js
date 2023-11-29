const cors = require('cors');
const express = require('express');
const { LOCAL_CLIENT_URL, CLIENT, CLIENT_1 } = require('../coonfig/default');




const applyMiddelware = (app) => {

app.use(cors({
    origin: [
        CLIENT,
        CLIENT_1,
        LOCAL_CLIENT_URL,
    ],
    credentials: true,
}));
app.use(express.json());
};

module.exports = applyMiddelware