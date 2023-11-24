require('dotenv').config();

const config = {
    LOCAL_CLIENT_URL: process.env.LOCAL_CLIENT ,
    CLIENT: process.env.CLIENT
}

module.exports = config