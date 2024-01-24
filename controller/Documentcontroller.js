const Document= require('../schema/Documentschema.js');

const getDocument = async (id) => {
    if (id === null) return;
try {
    const document = await Document.find({docId:id.id});
    if (document.length !== 0) return document;
    console.log(id.id)
     return await Document.create({ name:id.name,docId:id.id, data: " " })
    
} catch (error) {
    console.log('am')
}

}

const updateDocument = async (id, data) => {
    try {
         if (data.ops[0].insert.length === 0) return
        await Document.findOneAndUpdate({docId:id.id},{data:data.ops[0].insert})
        
    } catch (error) {
        
        console.log(error)
    }
}
const getDoc= async(doc)=>{
    
    if (doc===null) return
  try {
    const document = await Document.find({name:doc});
    if (document.length !== 0) return document;
  } catch (error) {
    return "no_doc"
  }
}
const delDoc =async(id)=>{
  console.log(id)
  if (id==null) return
  try {
    return await Document.deleteOne({docId:id})

  } catch (error) {
    console.log("no error")
  }
}

module.exports = [getDocument,updateDocument,getDoc,delDoc];