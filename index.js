const express = require('express');
const cors = require('cors')
const app= express();
app.use(cors());
const server = require('http').createServer(app);
const Connection=require('./db.js')
const [getUser,addUser]=require("./controller/Usercontroller.js")
const [getDocument,updateDocument,getDoc,delDoc]=require('./controller/Documentcontroller.js')
const {Server}=require("socket.io");
const PORT = process.env.PORT || 5000;
Connection();
const io = new Server(server, {
  cors: {
    // origin: 'http://localhost:3000',
    origin: 'https://worddocument.onrender.com',
    methods: ['GET', 'POST']
  }
});

io.on('connection', socket=>{
  socket.on('get-document', async (documentId) => {
    const document = await getDocument(documentId);
    socket.join(documentId);
    socket.on('send-changes', delta => {
      socket.broadcast.to(documentId.id).emit('receive-changes', delta);
      console.log(delta)
    })
    try {
      console.log(document[0])
      socket.emit('load-document', document[0].data);
      
    } catch (error) {
      socket.emit('load-document', " ");
      console.log(error)
    }
      
      socket.on('save-document', async data => {
        await updateDocument(documentId, data);
      })
    })
    socket.on('add_user',async user=>{
      await addUser(user);
    })
    socket.on('send_user', async(data)=>{
      const user =  await getUser(data);
      socket.emit("get_user",user[0])
    })
    socket.on("send-doc", async(name)=>{
      console.log(name)
      const doc= await getDoc(name);
      console.log(doc)
      socket.emit("get_doc",doc)
    })
    socket.on("del-doc", async id=>{
      console.log(id)
      await delDoc(id);
      console.log("delete success")
    })
  })
  
  server.listen(PORT,()=>{
      console.log("server is running.")
    }) 