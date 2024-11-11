// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import the BookNote model
const BookNote = require("./models/BookNote");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Server is running");
});

// POST route for adding a book note
app.post("/api/booknotes", async (req, res) => {
  const { id, type, category, title, author } = req.body;

  // Simple validation to check required fields
  if (!id || !type || !category || !title || !author) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Create a new BookNote with the incoming request body
    const newBookNote = new BookNote(req.body);
    const savedBookNote = await newBookNote.save(); // Save the note to MongoDB
    res.status(201).json(savedBookNote); // Respond with the saved book note
  } catch (error) {
    console.error("Error saving book note:", error);
    res.status(500).json({ error: "Failed to save book note" });
  }
});

// GET route to fetch all book notes
app.get("/api/booknotes", async (req, res) => {
  try {
    const bookNotes = await BookNote.find();
    res.status(200).json(bookNotes);
  } catch (error) {
    console.error("Error fetching book notes:", error);
    res.status(500).json({ error: "Failed to fetch book notes" });
  }
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB", error));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
