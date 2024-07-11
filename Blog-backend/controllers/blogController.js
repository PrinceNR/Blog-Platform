const blogData = require("../models/blogModels")
const asyncHandler = require("express-async-handler")


const getBlogData = asyncHandler( async(req, res) => {
    const datas = await blogData.find()
    res.status(200).json({blogDatas : datas,message :"blog datas are here"})
} )


const postBlogData = asyncHandler( async (req, res) => {
        const newBlog = req.body 
        const newData = await blogData.create(newBlog)
        res.status(200).json({message : "new employee added", newBlog :newData})
})


module.exports = {getBlogData ,postBlogData}  