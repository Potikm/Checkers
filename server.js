const express = require('express');
const socket = require('socket.io');
const app = express();
let PORT = 5000;


const server = require("http").createServer(app);



const io = socket(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

server.listen(PORT, () => {
    console.log("server runs on "+PORT);
})


io.on("connection", (socket) => {

    socket.on('enemyMove', (id, activeCoinId, queen) => {

        console.log(queen)
        socket.broadcast.emit("enemyMove", id, activeCoinId, queen)
        
    })

    socket.on("changeTurn", () => {
        socket.broadcast.emit("changeTurn")
    })
    

    socket.on("killedPiece", (id) => {
        console.log(id + " sssss")
        socket.broadcast.emit("killedPiece", id);
    })






    socket.on("join", () => {
        if (io.sockets.adapter.rooms.get('room1')){        // joining room 
      
         if (io.sockets.adapter.rooms.get('room1').size < 2){
              socket.join("room1");
              console.log("user has joined")
              console.log(io.sockets.adapter.rooms.get('room1').size)
              socket.emit("setTurn", io.sockets.adapter.rooms.get('room1').size)
            
             
            }
            
        }else{

            socket.join("room1");
              console.log("user has joined")
              console.log(io.sockets.adapter.rooms.get('room1').size)
              socket.emit("setTurn", io.sockets.adapter.rooms.get('room1').size)
              
        }
    })
})