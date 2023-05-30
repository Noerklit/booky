import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";

registerLocale("en-GB", enGB);
setDefaultLocale("en-GB");

function Listing() {
  const [imagePath, setImagePath] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [edition, setEdition] = useState("");
  const [authors, setAuthors] = useState("");
  const [isbn, setIsbn] = useState("");
  const [forLending, setForLending] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();
        let userData = {
            isbn: isbn,
			title: title,
            edition: edition,
            authors: authors,
            price: price,
            imagePath: imagePath,
            forLending: forLending,
            startDate: startDate,
            endDate: endDate,
            condition: condition,
            bookID: "",
            username: localStorage.getItem("username")
        };
        fetch("/api/books", {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => response.json()).then(data =>{
            console.log(data)
			setTimeout(() => {
				navigate('/profile');
			}, 1000)
        })
        
        console.log("clicked")
  }

  function handlePictureChange(event) {
    const file = event.target.files[0];
    setImagePath(file);
  }

  function handleLendingChange(event) {
    setForLending(event.target.checked);
    setPrice("");
  }

  const conditionOptions = ["New", "Slightly used", "Used", "Very used"];

  function handleConditionChange(event) {
    setCondition(event.target.value);
  }

  return (
	<MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image" style={{backgroundImage: "url(https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/GettyImages-900301626_437925_t2i3bm.jpg)"}}>
        <div className="mask gradient-custom-3"></div>
        	<MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            	<form className="form" onSubmit={handleForm}>
              		<MDBCardBody className="px-5">
                		<h2 className="text-uppercase text-center mb-5 display-6">Sell/rent book</h2>
                		<div className="d-flex flex-column mb-4">
                		  	<div className="d-flex align-items-center">
                		    	<input type="checkbox" id="forLending" checked={forLending} onChange={handleLendingChange}/>
                		    	<label htmlFor="forLending" className="ms-2"> This book is for rent - leave empty if selling </label>
                		  	</div>
                		  	{forLending && (
                		    	<div className="d-flex flex-column mt-2">
                		    	  	<label htmlFor="lendingPeriod" className="me-2 "> Rent period: </label>
                		    	  	<div className="d-flex flex-row align-items-center">
                		    	    	<MDBIcon fas icon="calendar-alt" className="me-2" style={{ marginBottom: '24px' }}/>
                		    	    	<div className="d-flex flex-column">
                		    	      		<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} selectsStart startDate={startDate} endDate={endDate} placeholderText="Start Date" wrapperClassName="mb-4" className="form-control form-control-lg" dateFormat="dd/MM/yyyy" minDate={new Date()} locale="en-GB"/>
                		    	      		<DatePicker selected={endDate} onChange={(date) => setEndDate(date)} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate || new Date()} placeholderText="End Date" wrapperClassName="mb-4" className="form-control form-control-lg" dateFormat="dd/MM/yyyy" locale="en-GB"/>
                		    	    	</div>
                		    	  	</div>
                		    	</div>
                		  	)}
                		</div>
            			<label htmlFor="picture" className="me-3" style={{ marginLeft: "35px" }}> Picture </label>
            			<div className="d-flex flex-row align-items-start mb-4">
            			  	<div>
            			    	<MDBIcon fas icon="image me-3" size="lg" />
            			    	<input type="file" accept="image/*" id="picture" onChange={handlePictureChange}/>
            			  	</div>
            			</div>
            			{imagePath && (
            			  <div className="d-flex justify-content-center align-items-center mb-4">
            			    <img src={URL.createObjectURL(imagePath)} alt="Selected" style={{ maxWidth: "100%", maxHeight: "200px" }}/>
            			  </div>
            			)}
            			<div className="d-flex flex-row align-items-center mb-4">
            			  	<MDBIcon fas icon="book me-3" size="lg" />
            			  	<div className="d-flex flex-column">
            			  	  	<label htmlFor="title">Title</label>
            			  	  	<MDBInput wrapperClass="mb-4" size="lg" id="title" type="text" name="title" value={title} required onChange={(e) => setTitle(e.target.value)}/>
            			  	</div>
            			</div>
            			<div className="d-flex flex-row align-items-center mb-4">
            			  	<MDBIcon fas icon="money-bill me-3" size="lg" />
            			  	<div className="d-flex flex-column">
            			  	  	<label htmlFor="price"> {forLending ? "Price per week (DKK)" : "Price (DKK)"} </label>
            			  	  	<MDBInput wrapperClass="mb-4" size="lg" id="price" type="text" name="price" value={price} required onChange={(e) => {
            			  	      	const validatedValue = e.target.value.replace(/[^0-9]/g, "");
            			  	      	setPrice(validatedValue);
            			  	    }}/>
            			  	</div>
            			</div>
            			<div className="d-flex flex-row align-items-center mb-4">
            			  	<MDBIcon fas icon="star me-3" size="lg" />
            			  	<div className="d-flex flex-column">
            			  	  	<label htmlFor="condition">Condition</label>
            			  	  	<select id="condition" name="condition" className="form-select form-select-lg" value={condition} required onChange={handleConditionChange}>
            			  	    	<option value="">Select Condition</option>
            			  	    	{conditionOptions.map((option) => (
            			  	      		<option key={option} value={option}>
            			  	      			{option}
            			  	      		</option>
            			  	    	))}
            			  	  	</select>
            			  	</div>
            			</div>
            			<div className="d-flex flex-row align-items-center mb-4">
            			  	<MDBIcon fas icon="book-reader me-3" size="lg" />
            			  	<div className="d-flex flex-column">
            			  	  	<label htmlFor="edition">Edition</label>
            			  	  	<MDBInput wrapperClass="mb-4" size="lg" id="edition" type="text" name="edition" value={edition} required onChange={(e) => {
            			  	  	    const validatedValue = e.target.value.replace(/[^0-9]/g, "");
            			  	  	    setEdition(validatedValue);
            			  	    }}/>
            			  	</div>
            			</div>
            			<div className="d-flex flex-row align-items-center mb-4">
            			  	<MDBIcon fas icon="user me-3" size="lg" />
            			  	<div className="d-flex flex-column">
            			  	  	<label htmlFor="authors">Authors</label>
            			  	  	<MDBInput wrapperClass="mb-4" size="lg" id="authors" type="text" name="authors" value={authors} required onChange={(e) => setAuthors(e.target.value)}/>
            			  	</div>
            			</div>
            			<div className="d-flex flex-row align-items-center mb-4">
            			  	<MDBIcon fas icon="barcode me-3" size="lg" />
            			  	<div className="d-flex flex-column">
            			  	  	<label htmlFor="isbn">ISBN</label>
            			  	  	<MDBInput wrapperClass="mb-4" size="lg" id="isbn" type="text" name="isbn" value={isbn} required onChange={(e) => {
            			  	  	    const validatedValue = e.target.value.replace(/[^0-9]/g, "");
            			  	  	    setIsbn(validatedValue);
            			  		}}/>
            			  	</div>
            			</div>
            		<MDBBtn className="bg-success mb-4 w-100" size="lg" type="submit" value="submit" style={{ maxWidth: "350px", maxHeight: "48px"}}> Publish </MDBBtn>
          		</MDBCardBody>
        	</form>
      	</MDBCard>
    </MDBContainer>
  );
}

export default Listing;
