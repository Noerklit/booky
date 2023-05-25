import React from "react";
import Card from 'react-bootstrap/Card';

function Book({ book }) {
  return (
    <Card>
      <Card.Img variant="top" src={book.imagePath} alt={book.title} />
      <Card.Body>
        <Card.Title>
          {book.title}
        </Card.Title>
        <Card.Text>
        Authors: {Array.isArray(book.authors) ? book.authors.join(", ") : book.authors}
        </Card.Text>
        <Card.Text>ISBN: {book.isbn}</Card.Text>
        <Card.Text>Edition: {book.edition}</Card.Text>
        <Card.Text>Publication Date: {book.publicationDate}</Card.Text>
        <Card.Text>Purchase Date: {book.purchaseDate}</Card.Text>
        <Card.Text>Original Price: ${book.originalPrice}</Card.Text>
        <Card.Text>Price: ${book.price}</Card.Text>
        <Card.Text>Language: {book.language}</Card.Text>
        <Card.Text>Condition: {book.condition}</Card.Text>
        <Card.Text>Owner ID: {book.ownerId}</Card.Text>
        <Card.Text>Book ID: {book.id}</Card.Text>
      </Card.Body>
    </Card>
  );
}



export default Book;