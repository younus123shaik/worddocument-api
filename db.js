const mongoose = require("mongoose")
const Connection = async ()=>{
    URL='mongodb+srv://younus123shaik:Yns0821@cluster0.eakan6a.mongodb.net/'
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log("connected to database ")
        // const user=new mongoose.Schema({
        //     email:String,
        //     password:String
        // })
        // const User=mongoose.model("user",user)
        // console.log(User.find({password:'pass'}))
        // User.create({email:"younus",password:"younus"})
    } catch (error) {
        console.log(error)
    }


}
module.exports = Connection;