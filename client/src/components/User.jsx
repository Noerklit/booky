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

    const handleDelete = (bookID) => {
      	fetch(`/api/books/${bookID}`, {
        	method: 'DELETE',
      	})
        .then(response => {
          	if (response.ok) {
            	setBookData(prevBooks => prevBooks.filter(book => book.bookID !== bookID));
          	} else {
            	console.log('Failed to delete book');
          	}
        })
        .catch(error => {
          	console.log('Error occurred while deleting the book:', error);
        });
    };

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
        			    	<Col key={index} xs={12} sm={6} md={6} lg={3}>
        			      		<Book key={book.bookID} book={book} onDelete={handleDelete} />
        			    	</Col>
        			  	))}
        			</Row>
      			)}
        	</div>
        </div>
    );
}

export default User;