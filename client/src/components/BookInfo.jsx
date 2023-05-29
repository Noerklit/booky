import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit";

function BookInfo() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`/api/books/${id}`)
      .then(response => response.json())
      .then(data => {
        
        if (data) {
          setBook(data);
        } else {
          console.error("Book data not found");
        }
      })
      .catch(error => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);


  if (!book) {
    return <div>Loading...</div>;
  }

  const formattedStartDate = new Date(book.startDate).toLocaleDateString();
  const formattedEndDate = new Date(book.endDate).toLocaleDateString();
  const placeholderImage = '/images/placeholder-book.png'
  const imagePath = book.imagePath || placeholderImage; // Use the placeholder image if imagePath is null

  return (
    <MDBContainer fluid className="py-4">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBRow>
            <MDBCol md="6">
              <img src={imagePath} className="img-fluid mh-20 " alt="Book Cover" />
            </MDBCol>
            <MDBCol md="6">
              <h2>{book.title}</h2>
              <p>Author: {book.authors}</p>
              <p>ISBN: {book.isbn}</p>
              <p>Edition: {book.edition}</p>
              {book.forLending ? <p>Price per week: {book.price} kr.</p> : <p>Price: {book.price} kr.</p>}
              <p>Condition: {book.condition}</p>
              {book.forLending ? (
                <>
                  <span className="badge bg-success">Available for lending</span>
                  <p>Lending Period: {formattedStartDate} to {formattedEndDate}</p>
                </>
              ) : ( 
                  <span className="badge bg-success">Book is for sale</span>              )}
                  <p className="fw-bold">Contact user: {book.username}</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default BookInfo;