import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const[alert, setAlert] = useState(null);
    
    const navigate = useNavigate();

    function handleForm(event){
        event.preventDefault();
        if(passwordCheck(password1, password2)) {
            let userData = {
                username: username,
                password: password1
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
            navigate('/profile')
            console.log("clicked")
        } else setAlert(<div className="alert alert-danger">Passwords do not match</div>);
    }
    function passwordCheck(password1, password2) {
        return password1 === password2
    }

  return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/GettyImages-900301626_437925_t2i3bm.jpg)'}}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                <form className="form" onSubmit={handleForm}>
                    <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5 display-6">Create user</h2>
                        <div className="mb-4 d-flex align-items-center justify-content-center">
                            <div className="me-3">
                                <MDBIcon fas icon="user" size="lg" />
                            </div>
                            <div>
                                <label htmlFor="form1">Username</label>
                                <MDBInput wrapperClass="mb-4" size="lg" id="form1" type="text" name="username" required onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-4 d-flex align-items-center justify-content-center">
                            <div className="me-3">
                                <MDBIcon fas icon="key" size="lg" />
                            </div>
                            <div>
                                <label htmlFor="form3">Password</label>
                                <MDBInput wrapperClass="mb-4" size="lg" id="form3" type="password" name="password" required onChange={(e) => setPassword1(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-4 d-flex align-items-center justify-content-center">
                            <div className="me-3">
                                <MDBIcon fas icon="key" size="lg" />
                            </div>
                            <div>
                                <label htmlFor="form3">Repeat password</label>
                                <MDBInput wrapperClass="mb-4" size="lg" id="form3" type="password" name="password" required onChange={(e) => setPassword2(e.target.value)}/>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-center mb-4'>
                            <Link to="/profile" className="link-success">Do you already have an account? Sign in here!</Link>
                        </div>
                        <MDBBtn className="bg-success mb-4 w-100 gradient-custom-4" size="lg" type="submit" value="submit" style={{ maxWidth: "300px", maxHeight: "48px" }}> Sign up </MDBBtn>
                    </MDBCardBody>
                </form>
            </MDBCard>
        </MDBContainer>
  )
}



export default SignUp

