const mongodb = require("mongoose")

const connctdb = async () => {

    try{
        const connect = await mongodb.connect(process.env.CONNECTION_STRING)
        console.log("Database conncted :", connect.connection.host , connect.connection.name)
    }
    catch(err){
        console.log("Database not conncted :", err);
    }
    
} 
 
module.exports = connctdb 