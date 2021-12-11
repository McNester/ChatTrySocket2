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



// Socket.io Connection------------------
io.on('connection',(socket)=>{
  console.log("New socket conntection: " + socket.id)

  socket.on("roomDetection",(roomStr)=>{
    console.log("The new room has been created");
    let roomName = {"roomName": roomStr}
    socket.broadcast.emit("newRoom",  roomName);
  })

  socket.on("joinToRoomDetection",(roomNameStr,nameOfNewUserInRoom)=>{

    socket.join(roomNameStr);

    console.log(nameOfNewUserInRoom + " has joined the " + roomNameStr);


       let  userName = {"userName": nameOfNewUserInRoom}

       io.to(roomNameStr).emit('newUserInRoom', userName )

  })

  socket.on("messageDetection",(roomNameStr,nameOfSender,messageStr,time)=>{



    console.log(nameOfSender + " send " + messageStr+" in "+roomNameStr);


       let  message = {"senderName": nameOfSender,"messageStr": messageStr,"time": time}


       socket.to(roomNameStr).emit('outerMessageReceived', message )
       

  })

  socket.on("leaveRoomDetection",(roomNameStr,nameOfUserOutOfRoom)=>{

    console.log(nameOfUserOutOfRoom + " has left the " + roomNameStr);


       let  userName = {"userName": nameOfUserOutOfRoom}

       io.to(roomNameStr).emit('newUserOutOfRoom', userName )

        socket.leave(roomNameStr);

  })


})
