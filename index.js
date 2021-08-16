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


var message = "";


//Socket.io Connection------------------
io.on('connection', (socket) => {

    console.log("New socket connection: " + socket.id)

    /*socket.on('join', (userName) => {

       //log the message in console

       console.log(userName + "has connected!")

      //create a message object

      let  jsonUserName = {"userName":userName}

       // send the message to all users including the sender  using io.emit()

      io.emit('newUser', jsonUserName)


      let  message = {"message":"Welcome to chatroom!!"}

      socket.emit('message',message)

    })*/



    socket.on('messagedetection', (messageContent) => {

       //log the message in console

       console.log("Message: "+messageContent)

      //create a message object

      let  message = {"message":messageContent}

       // send the message to all users including the sender  using io.emit()

      socket.broadcast.emit('message', message )

      })

});
