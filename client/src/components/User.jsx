import React, {useEffect, useState} from 'react'
import Book from "../components/Book";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function User({ onLogout }){
    const [bookData, setBookData] = useState([{}]);
    const loggedInUser = localStorage.getItem("username")

    useEffect(() => {
        fetch("/api/books")
        .then(response => response.json())
        .then(data => {
            // Sort the book data by title in ascending order
            const userBooks = findUserBooks(data, loggedInUser)
            const sortedData = userBooks.sort((a, b) => a.title.localeCompare(b.title));
            setBookData(sortedData);
        });
    }, [loggedInUser]);

    function findUserBooks(data, loggedInUser) {
        return data.filter(element => element.username === loggedInUser);
    }

    function handleLogout(event) {
        event.preventDefault();
        localStorage.removeItem("username");
        onLogout();
    }
    const username = localStorage.getItem("username");
    return(
        
        <div className="container-sm container-fluid">
            <h1 className="display-4">Welcome {username}</h1>
            <div className="justify-content-end d-flex">
            <Button className="bg-danger" type="submit" onClick={handleLogout}>Logout</Button>
            </div>

            <div>
                <h2 className="display-6">Your listings</h2>
                 {typeof bookData === "undefined" ? (
        <p>Loading...</p>
      ) : (
        <Row>
          {bookData.map((book, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4}>
              <Book book={book} />
            </Col>
          ))}
        </Row>
      )}
        </div>
        </div>
    );
}

export default User;