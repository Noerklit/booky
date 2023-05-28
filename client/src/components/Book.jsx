import React from "react";
import Card from 'react-bootstrap/Card';

function Book({ book }) {
  return (
    <Card className="card" style={{ height: '500px', width: '300px', marginBottom: '20px', border: '2px solid rgb(28, 21, 1)' }}>
      <Card.Img variant="top" src={book.imagePath} alt={book.title} style={{ objectFit: 'cover', height: '350px', width: '100%' }} />
      <Card.Body className="card-body" style={{ textAlign: 'center' }}>
        <Card.Title className="card-title" style={{ fontSize: '17px' }}>{book.title}, {book.edition}. edition</Card.Title>
        <Card.Text className="card-text">Authors: {Array.isArray(book.authors) ? book.authors.join(", ") : book.authors}</Card.Text>
      </Card.Body>
    </Card>
  );
}



export default Book;