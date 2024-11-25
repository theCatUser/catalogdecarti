import React from "react";

function BookDetails({ book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Gen:</strong> {book.genre}</p>
      <p><strong>Descriere:</strong> {book.description}</p>
    </div>
  );
}

export default BookDetails;
