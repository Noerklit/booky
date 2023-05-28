import React,  {useState}   from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBAlert
  }
  from 'mdb-react-ui-kit';

  

function Login({ onLogin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState(null);

    
    function handleLogin(event){
        event.preventDefault();
        
        fetch("/api/login", {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(data =>{
            validLogin(data)
            
        })
        console.log("clicked")
    }

    function validLogin (data){
        var usernameExists = false;
        var passwordMatch = false;

        data.forEach(element => {
            if (element.username === username) {
                usernameExists = true;
                if(element.password === password) {
                    passwordMatch = true;
                    localStorage.setItem("username", username)
                    onLogin();
                }
            }
        });

        if(!usernameExists) { 
            //alert("Brugernavn eksisterer ikke")
            setAlert(<div className="alert alert-danger">Brugernavn eksisterer ikke</div>);

        } else {
            if(!passwordMatch) {
                setAlert(<div className="alert alert-danger">Forkert kodeord</div>);
            }
        }
    }

    return(
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/GettyImages-900301626_437925_t2i3bm.jpg)'}}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                <form className="form" onSubmit={handleLogin}>
                <MDBCardBody className='px-5'>
                <h2 className="text-uppercase text-center mb-5">Login</h2>
                {alert}
                <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput wrapperClass='mb-4' label='Brugernavn' size='lg' id='form1' type='text' name="username" onChange={e=>setUsername(e.target.value)}/>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg'/>
                    <MDBInput wrapperClass='mb-4' label='Kodeord' size='lg' id='form3' type='password' name="password" onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div className='d-flex flex-row justify-content-center mb-4'>
                   <a href="/signup" className="link-success">Har du ikke en bruger? Registrer her!</a>
                </div>
                
                <MDBBtn className='bg-success mb-4 w-100 gradient-custom-4' size='lg' type="submit" value="submit" style={{maxWidth: '300px', maxHeight: '48px'}}>Login</MDBBtn>
                </MDBCardBody>
                </form>
            </MDBCard>
        </MDBContainer>
    );
}

export default Login;