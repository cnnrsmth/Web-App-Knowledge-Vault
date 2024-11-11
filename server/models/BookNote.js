const mongoose = require("mongoose");

const bookNoteSchema = new mongoose.Schema({
  id: { type: String, required: true }, // Can be generated or omitted if MongoDB's default _id is used
  type: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  summary: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  takeaways: [String], // Array of takeaway strings
  quotes: [String], // Array of quote strings
  notes: {
    type: Map,
    of: String, // Each key is a note title, and value is the note content
  },
});

module.exports = mongoose.model("BookNote", bookNoteSchema);
