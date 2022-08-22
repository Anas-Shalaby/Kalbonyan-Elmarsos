const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");
const Filter = require("bad-words");
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./utils/users");
const {
  generateMessage,
  generateLocationMessage,
} = require("./utils/messages");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDiretory = path.join(__dirname, "../public");

app.use(express.static(publicDiretory));

io.on("connection", (socket) => {
  console.log("New web socket connection");

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        generateMessage("Admin", `${user.username} has left!`)
      );
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });

  socket.on("join", (options, callback) => {
    const { error, user } = addUser({ id: socket.id, ...options });

    if (error) {
      return callback(error);
    }

    socket.join(user.room);
    socket.emit("message", generateMessage("Admin", ` Welcome`));
    socket.broadcast
      .to(user.room)
      .emit("message", generateMessage(`${user.username} has joined!`));

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    const filter = new Filter();
    if (filter.isProfane(message)) {
      return callback("Not allowed");
    }

    io.to(user.room).emit("message", generateMessage(user.username, message));
    callback("");
  });

  socket.on("sendLocation", (position, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit(
      "LocationMessage",
      generateLocationMessage(
        user.username,
        ` https://google.com/maps?q=${position.latitude},${position.longitude}`
      )
    );
    callback();
  });
});
server.listen(port, () => {
  console.log(`The server is up on port ${port}`);
});
