import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function Header(){
    
    return (
        <header className='header'>
            <Navbar expand="lg">
                <Container className="1">
                    <div className="d-flex">
                        <Navbar.Toggle className="pr-5" aria-controls="basic-navbar-nav" />
                        <Link to="/" className="navbar-logo">
                            <img className="navbar-logo" src="/images/booky-logo.png" alt="Logo"></img>
                        </Link>
                        <Link to="/" className="navbar-brand p-2">Booky</Link>
                    </div> 
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search for title, author or ISBN" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0 rounded-circle" type="submit" style={{ borderColor: '#ec9131', backgroundColor: '#ec9131' }}><i className="fas fa-search"></i></button>
                    </form>
                    <Navbar.Collapse className="col-sm justify-content-end">
                        <Nav >
                            <Link className="nav-link" to="/profile"><FontAwesomeIcon icon={faUser} className="me-2"/>Profile</Link>
                            <Link className="nav-link" to="/browse">Browse</Link>
                            <Link className="nav-link" to="/upload">Sell/Rent</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;