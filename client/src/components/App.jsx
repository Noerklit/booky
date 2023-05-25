import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import Book from "./Book";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UserLogin from './UserLogin';

function App() {

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
    <div> 
      <Header />
      <div className="container-sm container-fluid">
        {(typeof backendData === 'undefined') ? (
          <p>Loading...</p>
        ): 
        backendData.map((book, index) => (
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <Book key={index} book={book} />
              </Col>
            ))}
          </Row>
      ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default App