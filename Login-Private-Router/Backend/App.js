const express = require("express");
const mongoose = require("mongoose");
const createAccountRouter = require("./routes/CreateAcc");
const db = require("./db");
const User = require("./models/User");
const Content = require("./models/Content");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Import routers
app.use("/api/create-account", createAccountRouter);

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;

  console.log("Sign-in request received:", email);

  try {
    const user = await User.findOne({ email });
    console.log("User found:", user);

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    // Ensure that the variable `isMatch` is properly defined
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid password");
      return res.status(401).json({ message: "Invalid password" });
    }

    console.log("Sign-in successful");
    res.status(200).json({ message: "Sign-in successful", user });
  } catch (error) {
    console.error("Error during sign-in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/content", async (req, res) => {
  const { content } = req.body;

  try {
    await Content.deleteMany(); // Optional: Clear previous content
    const newContent = new Content({ content });
    await newContent.save();
    res.send("Content saved");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.get("/api/content", async (req, res) => {
  try {
    const content = await Content.findOne();
    res.json(content);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
