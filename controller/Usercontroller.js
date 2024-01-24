const User = require('../schema/Userschema.js')

const getUser = async (data) => {
    if (data === null) return;
try {
    console.log(data)
    const user = await User.find({email:data.email});
    
    return user;
    
     
    
} catch (error) {
    console.log(error)
    return "no_user"
}

}
const addUser = async (user)=>{
    if (user===null) return
    console.log(user)
    return await User.create({Uid:user.name,email:user.email,password:user.password})
}
module.exports = [getUser,addUser]