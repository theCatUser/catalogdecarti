import React from "react";

function BookList({ books, onSelectBook, deleteBook }) {
  return (
    <div>
      {books.map((book, index) => (
        <div key={index} onClick={() => onSelectBook(book)}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.genre}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteBook(index);
            }}
          >
            Șterge
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
