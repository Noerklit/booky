import React, {useEffect, useState} from 'react'
import Book from "../components/Book";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Browse() {
  const [bookData, setBookData] = useState([{}]);

  useEffect(() => {
    fetch("/api/books")
      .then(response => response.json())
      .then(data => {
        // Sort the book data by title in ascending order
        const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
        setBookData(sortedData);
      });
  }, []);

  return (
    <div className="container-sm container-fluid">
      <h1 className="display-4">Browse books here</h1>
      {typeof bookData === "undefined" ? (
        <p>Loading...</p>
      ) : (
        <Row>
          {bookData.map((book, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={3}>
              <Book book={book} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
  }
  
  export default Browse;