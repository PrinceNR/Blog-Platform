const express = require("express")
const connctdb = require("./config/dbConnection")
const dotenv = require("dotenv").config()
const cors = require("cors")
const app = express()

const Port = process.env.PORT || 3110

connctdb()
app.use(cors())
app.use(express.json())

app.use("/", require("./routes/blogRoutes")) 

app.listen(Port,() => console.log("server is running on Port",Port))



     