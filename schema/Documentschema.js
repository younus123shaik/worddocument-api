
const mongoose = require('mongoose') 
const documentSchema= mongoose.Schema({
    name:String,
    docId : String,
    data : {
        type: Object,
        required:true
    },
});

const document = mongoose.model('document',documentSchema);

module.exports= document;