const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        name:{
            type:String,
            required: true
        },
        lastName:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        phone:{
            type:String,
            required: true
        }

    }
)
module.exports=mongoose.model('User',userSchema)// the model takes the name of the file and the schema name