import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";

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
 
  console.log(backendData[0].title)

  const BookComponent = ({ book }) => {
    return (
      <div>
        <img src={book.imagePath} alt={book.title} />
        <h2>{book.title}</h2>
        <p>Authors: {Array.isArray(book.authors) ? book.authors.join(", ") : book.authors}</p>
        <p>ISBN: {book.isbn}</p>
        <p>Edition: {book.edition}</p>
        <p>Publication Date: {book.publicationDate}</p>
        <p>Purchase Date: {book.purchaseDate}</p>
        <p>Original Price: ${book.originalPrice}</p>
        <p>Price: ${book.price}</p>
        <p>Language: {book.language}</p>
        <p>Condition: {book.condition}</p>
        <p>Owner ID: {book.ownerId}</p>
        <p>Book ID: {book.id}</p>
      </div>
    );
  };


  
  return (
    <div> 
      <Header />
      <div className="container-sm container-fluid">
        {(typeof backendData === 'undefined') ? (
          <p>Loading...</p>
        ): 
        backendData.map((book, index) => (
        <BookComponent key={index} book={book} />
      ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default App