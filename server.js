// server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const classRoutes = require("./routes/classRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Gym Management API 😍  ");
  });

// MongoDB connection without deprecated options
mongoose.connect("mongodb+srv://amudhamonika20:CeWZldzSEkmG7BNf@cluster0.sybwv.mongodb.net/gym-management")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/classes", classRoutes);

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
