const express = require("express")
const router = express.Router()
const { getBlogData , postBlogData } = require("../controllers/blogController")




router.get("/",getBlogData)

router.post("/create" , postBlogData)

// router.route("/create").get((req,res) => {
//     console.log("req.body is",req.body);
//     res.status(200).json({message : "Get all contacts"});
// })


module.exports = router 

