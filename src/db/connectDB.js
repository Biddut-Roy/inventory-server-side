const mongoose =require('mongoose')
require("dotenv").config();



const getConnectString = () => {
    let connectionURI;

    if (process.env.NODE_ENV === 'development') {
        connectionURI = process.env.DATABASE_LOCAL
        connectionURI = connectionURI.replace('<username>', process.env.DATABASE_LOCAL_USERNAME)
        connectionURI = connectionURI.replace('<password>', process.env.DATABASE_LOCAL_PASSWORD)
    }else{
        connectionURI = process.env.DATABASE_PROD
    }
    return connectionURI ;

};


const connectDB = async () =>{

    const uri = getConnectString()
    await mongoose.connect(uri,{dbName:process.env.DB_NAME})

}

module.exports = connectDB ;
