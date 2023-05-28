import React from "react";
import Card from 'react-bootstrap/Card';

function Book({ book }) {
  return (
    <Card class="card" style={{height:'500px', width: '300px', marginBottom: '20px'}} >
      <Card.Img variant="top" src={book.imagePath} alt={book.title}/>
      <Card.Body class="card-body" style={{ textAlign: 'center' }}>
        <Card.Title class="card-title">{book.title}, {book.edition}. edition</Card.Title>
        <Card.Text class="card-text">Authors: {Array.isArray(book.authors) ? book.authors.join(", ") : book.authors}</Card.Text>
      </Card.Body>
    </Card>
  );
}



export default Book;