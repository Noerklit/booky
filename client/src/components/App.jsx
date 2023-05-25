import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import Book from "./Book";

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
  
  return (
    <div> 
      <Header />
      <div className="container-sm container-fluid">
        {(typeof backendData === 'undefined') ? (
          <p>Loading...</p>
        ): 
        backendData.map((book, index) => (
        <Book key={index} book={book} />
      ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default App