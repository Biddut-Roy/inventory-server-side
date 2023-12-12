require("dotenv").config();
const http = require('http');
const app = require('./src/app');
const connectDB = require("./src/db/connectDB");
const { Server } = require("socket.io");
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const cors = require('cors');
const { LOCAL_CLIENT_URL, CLIENT, CLIENT_1 } = require('./src/coonfig/default');



//  live chat {Socket.io}
const io = new Server(server, {
    cors: {
        origin: [
            CLIENT,
            CLIENT_1,
            LOCAL_CLIENT_URL,
        ],
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });


    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });




const main = async()=>{
    await connectDB()
    server.listen(port, async (req, res) => {
                console.log(`listening on ${port}`);
            });
}

main();