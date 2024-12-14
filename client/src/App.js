import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import axios from "axios"; // Import axios for API calls
import ChatBubble from "./components/ChatBubble";

function App() {
  const [bookNotes, setBookNotes] = useState([]); // State to hold fetched book notes

  // Fetch book notes data from the backend on mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/booknotes") // Adjust the API URL if needed
      .then((response) => {
        setBookNotes(response.data); // Store the data in state
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/book-notes" element={<Books bookNotes={bookNotes} />} />
          <Route
            path="/books/:id"
            element={<BookDetails bookNotes={bookNotes} />}
          />
        </Routes>
        <ChatBubble />
      </div>
    </Router>
  );
}

export default App;
