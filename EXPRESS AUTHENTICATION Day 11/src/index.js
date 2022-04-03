const express = require('express')

const userController = require("./controllers/user.controller")
// const postsController = require("./controllers/posts.controller")
const postController = require("./controllers/posts.controllers")

const app = express()
const {register,login} = require("./controllers/auth.controller")


app.use(express.json())

app.use("/users",userController)
app.use("/register", register)
app.use("/login", login) 
app.use("/postss",postController)

module.exports = app