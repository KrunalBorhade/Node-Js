const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema(
    {
        title:{type:String, required:true},
        body:{type:String, required:true},
        userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

Postss = mongoose.model("postss",postsSchema)

module.exports = Postss
