const mongoose = require('mongoose');

module.exports = async()=>{
    return mongoose.connect("mongodb+srv://krunal:krunal28@cluster0.cjh3q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}