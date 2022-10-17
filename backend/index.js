const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  pingTimeout: 1000,
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  socket.onAny((event) => console.log(`Socket Event: ${event}`));

  // 방에 입장했을 때
  socket.on("room", ({ room_name }) => {
    socket.join(room_name);
  });

  // 방 나가기
  socket.on("leave", ({ room_name }) => {
    socket.leave(room_name);
  });

  // 메세지를 입력받았을 때
  socket.on("message", ({ name, room_name, message }) => {
    console.log(name, room_name, message);
    // 여기부터 에러
    // room에 있는 사람들한테 방송해야됨.
    io.to(room_name).emit("broadcast", { name, message });
  });

  socket.on("disconnect", () => {
    // socket.rooms.size === 0
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
