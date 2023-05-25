import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'




function Header(){
    return (
            <header>
                <Navbar bg="light" expand="lg">
                <Container className="">
                
                <div className="d-flex">
                    <Nav.Link href="#home">
                        <img className="navbar-logo" src="/images/booky-logo.png" alt="Logo"></img>
                    </Nav.Link>
                    <Nav.Link href="#home" className="navbar-brand">Booky</Nav.Link>
                </div> 
                    
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="col-sm justify-content-end">
                <Nav>
                    <Nav.Link href="#home">Search</Nav.Link>
                    <Nav.Link href="#link">Sell</Nav.Link>
                </Nav>
                </Navbar.Collapse>
               
                </Container>
                </Navbar>
            </header>
    );
}

export default Header;