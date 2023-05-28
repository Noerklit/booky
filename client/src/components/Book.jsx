import React from "react";
import Card from 'react-bootstrap/Card';

function Book({ book }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card className="card" style={{ height: '500px', width: '300px', marginBottom: '20px' }}>
        <Card.Img variant="top" src={book.imagePath} alt={book.title} />
        <Card.Body className="card-body" style={{ textAlign: 'center' }}>
          <Card.Title className="card-title" style={{ fontSize: '18px' }}>{book.title}, {book.edition}. edition</Card.Title>
          <Card.Text className="card-text">Authors: {Array.isArray(book.authors) ? book.authors.join(", ") : book.authors}</Card.Text>
        </Card.Body>
      </Card>
</div>
  );
}



export default Book;