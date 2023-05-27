import React from "react";
import Card from 'react-bootstrap/Card';

function Book({ book }) {
  return (
    <Card style={{ width: '300px'}}>
      <Card.Img variant="top" src={book.imagePath} alt={book.title}/>
      <Card.Body>
        <Card.Title>{book.title}, {book.edition}. edition</Card.Title>
        <Card.Text>Authors: {Array.isArray(book.authors) ? book.authors.join(", ") : book.authors}</Card.Text>
      </Card.Body>
    </Card>
  );
}



export default Book;