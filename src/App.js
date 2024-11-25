import './App.css';
import React, { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Catalog de Cărți</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} onSelectBook={setSelectedBook} deleteBook={deleteBook} />
      {selectedBook && <BookDetails book={selectedBook} />}
    </div>
  );
}

export default App;
