const express = require('express')
const path = require('path');
const socketIO = require('socket.io')
const http = require('http');


//inicializations
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// settings
app.set('port',process.env.PORT||3000);


//middlewares


//sockets
require('./sockets')(io);
//statcic files
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('src/public'));

//statrting the server
server.listen(app.get('port'),()=>{
    console.log("servidor iniciado")
})