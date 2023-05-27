import React, {useEffect, useState} from 'react'
import Book from "../components/Book";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Home() {
    const [backendData, setBackendData] = useState([{}]);
  
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);
    return (
        <div className="container-sm container-fluid">
          {(typeof backendData === 'undefined') ? (
            <p>Loading...</p>
          ): 
        <Row>
          {backendData.map((book, index) => (
            <Col>
            {Array.from({ length: 1 }).map((_, idx) => (
                  <Book key={index} book={book}/>
              ))}
            </Col>
            ))}
        </Row>
          }
        </div>
    );
}

export default Home;

