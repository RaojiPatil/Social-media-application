require('dotenv').config("/config/.env");
const express = require("express");
const app = express();
const cors = require('cors');

app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static("uploads"));
app.use("*",cors());

// Require 
const SignupRoutes=require("./routes/signupRoutes")
const loginRoutes=require("./routes/loginRoutes")
const otpRoutes=require("./routes/otpRoutes")
const resetPasswordRoutes=require("./routes/resetPassRoutes")
const profileRoutes=require("./routes/profileRoute")
const postRoutes=require("./routes/postRoutes")
const googleAuthRoute=require("./routes/googleAuthroute")
const storyRoutes=require("./routes/storyRoutes")

// uses
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes API
app.use("/signUp",SignupRoutes);
app.use("/login",loginRoutes);
app.use("/send-email",otpRoutes);
app.use("/reset-password",resetPasswordRoutes);
app.use("/profile",profileRoutes);
app.use("/userpost",postRoutes);
app.use("/google",googleAuthRoute);
app.use("/story",storyRoutes);







const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5100",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});







// Server

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
})


