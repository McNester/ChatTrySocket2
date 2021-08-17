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





//Socket.io Connection------------------
io.on('connection', (socket) => {

    console.log("New socket connection: " + socket.id)

    socket.on('messagedetection', (messageContent,roomName) => {

       //log the message in console

       console.log("Message: "+messageContent)

      //create a message object

      let  message = {"message":messageContent}

      // send the message to all users including the sender  using io.emit()
      io.to(roomName).emit('message', message )


      })

      socket.on('joinRoom', (roomName) =>{

        socket.join(roomName);

        console.log(" New user has joined "+roomName + "!")

        let  message = {"message": " New user has joined "}

        io.to(roomName).emit('newUser', message )

      })

});
