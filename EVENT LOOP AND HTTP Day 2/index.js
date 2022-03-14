const express = require('express')

const app = express()

app.get("",function(req,res){
  //console.log("Hello")

  return res.send("Hello")
})

app.get('/books', function (req, res){
    res.send(
        [
      {
        title: "Do Epic Shit",
        Author: " Ankur Warikoo",
      },
      {
        title: "Wise and Otherwise: A Salute to Life",
        Author: "Sudha Murty",
      },
      {
        title: "Atomic Habits",
        Author: " ames Clear",
      },
      {
        title: "To Kill a Mockingbird",
        Author: "Harper Lee",
      },
    ]
    );
})

app.listen(5000, ()=> {
    console.log('listening on port 5000')
})