const express = require('express');

const app = express();

app.use(logger)

app.get("/books", (req, res) => {
    res.send("Hello")
});

function logger(req, res,next) {
console.log("Before Initialization")
next();
}

app.get("/books/:name", (req, res) => {
    req.name = req.params.name;
    res.send({bookName:req.name})
})

app.listen("5100",()=>{
    console.log("Listning to port 5100")
})