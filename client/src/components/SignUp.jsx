import React, {useState, useEffect} from 'react'
import {browserHistory} from "react-router";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleForm(event){
        event.preventDefault();
        let userData = {
            username: username,
            password: password
        }
        fetch("/api/login", {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => response.json()).then(data =>{
            console.log(data)
        })
        window.location.replace('/profile')
        console.log("clicked")
    }

  return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/GettyImages-900301626_437925_t2i3bm.jpg)'}}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                <form className="form" onSubmit={handleForm}>
                <MDBCardBody className='px-5'>
                <h2 className="text-uppercase text-center mb-5">Opret en bruger</h2>
                <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput wrapperClass='mb-4' label='Brugernavn' size='lg' id='form1' type='text' name="username" onChange={e=>setUsername(e.target.value)}/>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg'/>
                    <MDBInput wrapperClass='mb-4' label='Kodeord' size='lg' id='form3' type='password' name="password" onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg'/>
                    <MDBInput wrapperClass='mb-4' label='Gentag kodeord' size='lg' id='form4' type='password'/>
                </div>
                <div className='d-flex flex-row justify-content-center mb-4'>
                <a href="/profile" className="link-success">Har du allerede en bruger? Login her!</a>
                </div>
                <MDBBtn className='mb-4 w-100 gradient-custom-4 bg-success' size='lg' type="submit" value="submit" style={{maxWidth: '300px', maxHeight: '48px'}}>Registrer</MDBBtn>
                </MDBCardBody>
                </form>
            </MDBCard>
        </MDBContainer>
  )
}

export default SignUp

