const mongoose = require('mongoose' )
const userSchema= mongoose.Schema({
    Uid:{
        type:String,
    },
    email : {
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const user = mongoose.model('user',userSchema)

module.exports = user;