import React from "react";
import { useNavigate } from 'react-router-dom';
import { MDBBtn, MDBContainer} from "mdb-react-ui-kit";


function LandingPage() {
  const navigate = useNavigate();

  function handleProfileChange() {
    navigate('/profile');
  }
  
  function handleBrowseChange() {
    navigate('/browse');
  }
  
  function handleListingChange() {
    navigate('/upload');
  }

  return (
    <MDBContainer 
        fluid 
        className="d-flex flex-column align-items-center justify-content-center bg-image py-0"
    >
      <div className="text-center">
        <img src="/images/booky-logo.png" alt="Logo" className="logo" style={{ maxWidth: "300px" }}/>
        <h1 className="display-4 mt-4">Welcome to Booky</h1>
        <p className="lead">
          This is a website where you can buy and rent books.
        </p>
      </div>
      <div className="d-flex flex-column align-items-center mt-4">
      <MDBBtn 
        className="w-100 mb-2 btn-rounded btn-lg gradient-custom-1"
        style={{ backgroundColor: "#1abc9c", color: "#fff", maxWidth: "169.38px", maxHeight: "48px"}}
        onClick={handleProfileChange}
        >
          Go to profile
        </MDBBtn>
        <MDBBtn 
            className="w-100 mb-2 btn-rounded btn-lg gradient-custom-2"
            style={{ backgroundColor: "#1abc9c", color: "#fff", maxWidth: "169.38px", maxHeight: "48px"}}
            onClick={handleBrowseChange}
        >
          Browse Books
        </MDBBtn>
        <MDBBtn 
            className="w-100 btn-rounded btn-lg gradient-custom-3"
            style={{ backgroundColor: "#1abc9c", color: "#fff", maxWidth: "169.38px", maxHeight: "48px"}}
            onClick={handleListingChange}
        >
          Create Listing
        </MDBBtn>
      </div>
    </MDBContainer>
  );
}

export default LandingPage;