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

//hello world!

//is it work? naziya

//fw
//Socket.io Connection------------------
io.on('connection', (socket) => {
<<<<<<< HEAD

    console.log("New socket connection- " + socket.id)


=======
    console.log("New socket connection: " + socket.id)
>>>>>>> 26e64b3e051b30b22ad9803bd9b7955b58e6e6b5
});
//pihou
