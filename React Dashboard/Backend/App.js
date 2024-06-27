const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Use the cors middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only this origin to access the resource
    methods: ["GET", "POST"], // Specify the allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
  })
);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post("/twitter/api/v1/get-profile", (req, res) => {
  console.log("Received request:", req.body); // Log request body
  const { Profile_name } = req.body;
  // Simulate fetching data based on Profile_name
  res.json({
    data: [
      {
        Name: "User1",
        UserTag: "@user1",
        Timestamp: "2021-01-01",
        TweetContent: "Hello World",
        Reply: "Reply1",
      },
      {
        Name: "User2",
        UserTag: "@user2",
        Timestamp: "2021-01-02",
        TweetContent: "Another Tweet",
        Reply: "Reply2",
      },
    ],
  });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
