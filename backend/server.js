// backend/server.js
require("dotenv").config();
const express = require("express");

const cors = require("cors");


const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL, // frontend URL
  credentials: true
}));


app.use(express.json());

// Route imports
const todoRoutes = require("./routes/todos");
const summarizeRoutes = require("./routes/summarize");

app.use("/todos", todoRoutes);
app.use("/summarize", summarizeRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
