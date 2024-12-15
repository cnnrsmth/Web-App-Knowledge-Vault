import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import axios from "axios";
import ChatBubble from "./components/ChatBubble";

function App() {
  const [bookNotes, setBookNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/booknotes")
      .then((response) => {
        setBookNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/knowledge-vault"
            element={<Books bookNotes={bookNotes} />}
          />
          <Route
            path="/books/:slug"
            element={<BookDetails bookNotes={bookNotes} />}
          />
        </Routes>
        <ChatBubble />
      </div>
    </Router>
  );
}

export default App;
