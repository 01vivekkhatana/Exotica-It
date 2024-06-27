const express = require("express");
const mongoose = require("mongoose");
const createAccountRouter = require("./routes/CreateAcc");
const db = require("./db");
const User = require("./models/User");
const cors = require("cors");
const Content = require("./models/User");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/create-account", createAccountRouter);
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
app.use(cors());
app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;

  console.log("Email received:", email);
  try {
    // Find user by email in the database

    const user = await User.findOne({ email });
    console.log("User found:", user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Authentication successful
    res.status(200).json({ message: "Sign-in successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
