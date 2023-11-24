const { model, Schema } = require("mongoose");

const servicesSchema = new Schema({

    "service_id":{
        type:Number ,
        required: true
    },
    "title":{
        type:String ,
        required: true
    },
    "price":{
        type:Number ,
        required: true
    },
    'img':{
        type:String ,
        required: true
    },
    "description":{
        type:String ,
        required: true
    },
    "facility":[
        {
            "name":{
                type:String ,
                required: true
            } ,
            "details": {
                type:String ,
                required: true
            }
        },
    ]
})

const Service = model("Service",servicesSchema)

module.exports = Service

