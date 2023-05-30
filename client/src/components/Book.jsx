import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useLocation  } from "react-router-dom";



function Book({ book, onDelete }) {
  const location = useLocation();
  const isProfileRoute = location.pathname === '/profile';

  const placeholderImage = '/images/placeholder-book.png'
  const imagePath = book.imagePath || placeholderImage;

  const handleDelete = () => {
    onDelete(book.bookID);
  };

  return (
    <div>
      {isProfileRoute && (
            <Button variant="danger" onClick={handleDelete}>Remove listing</Button>
          )}
    <Link to={`/${book.bookID}`} className="card-link" >
        <Card className="card" style={{ height: '500px', width: '300px', marginBottom: '20px', border: '2px solid rgb(28, 21, 1)' }}>
          <Card.Img variant="top" src={imagePath} alt={book.title} style={{ objectFit: 'cover', height: '350px', width: '100%' }} />
          <Card.Body className="card-body" style={{ textAlign: 'center' }}>
            <Card.Title className="card-title" style={{ fontSize: '17px' }}>{book.title}, {book.edition}. edition</Card.Title>
            <Card.Text className="card-text">Authors: {Array.isArray(book.authors) ? book.authors.join(", ") : book.authors}</Card.Text>
          </Card.Body>
        </Card>
    </Link>
    
    </div>
  );
}



export default Book;