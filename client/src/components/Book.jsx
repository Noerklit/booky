import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Book({ book }) {
  return (
    <div>
        <img src={book.imagePath} alt={book.title} />
        <h2>{book.title}</h2>
        <p>Authors: {Array.isArray(book.authors) ? book.authors.join(", ") : book.authors}</p>
        <p>ISBN: {book.isbn}</p>
        <p>Edition: {book.edition}</p>
        <p>Publication Date: {book.publicationDate}</p>
        <p>Purchase Date: {book.purchaseDate}</p>
        <p>Original Price: ${book.originalPrice}</p>
        <p>Price: ${book.price}</p>
        <p>Language: {book.language}</p>
        <p>Condition: {book.condition}</p>
        <p>Owner ID: {book.ownerId}</p>
        <p>Book ID: {book.id}</p>
      </div>
  );
}

export default Book;