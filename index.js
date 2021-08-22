const express = require('express'); //requires express module
const socket = require('socket.io'); //requires socket.io module
const fs = require('fs');
const app = express();
var PORT = process.env.PORT || 5000;
const server = app.listen(PORT); //tells to host server on 5000


//Playing variables:
app.use(express.static('public')); //show static files in 'public' directory
console.log('Server is running');
const io = socket(server);

//pls work!

// Socket.io Connection------------------
io.on('connection',(socket)=>{
  console.log("New socket conntection: " + socket.id)

  socket.on("groupDetection",(groupStr)=>{
    console.log("New group has added " + " ");
    let groupName = {"groupName": groupStr}
    io.emit("GroupName",  groupName);
  })
})
