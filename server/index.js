const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const DBconnection = require("./prisma/DBconnection"); 
// Import Routes
const authRoutes = require("./routes/auth");
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Connect to the database
DBconnection();

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
