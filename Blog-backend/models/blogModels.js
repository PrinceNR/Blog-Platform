const mongodb = require("mongoose")

const blogSchema = mongodb.Schema({
    image :{
        type : String,
        required :[true]
    },
    heading :{
        type : String,
        required :[true]
    },
    date :{
        type : String,
        required :[true]
    },
    discription :{
        type : String,
        required :[true]
    },
    comments :{
        type : Number,
        default : 0
    },
},{
    TimeStamps : true
})

module.exports = mongodb.model("blogData", blogSchema)