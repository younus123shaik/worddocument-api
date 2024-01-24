
const mongoose = require('mongoose') 
const documentSchema= mongoose.Schema({
    name:String,
    docId : String,
    data : {
        type: String,
        required:true
    },
});

const document = mongoose.model('document',documentSchema);

module.exports= document;