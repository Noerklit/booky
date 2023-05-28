import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import SearchBar from "./SearchBar";


function Header(){
    return (
            <header>
                <Navbar bg="light" expand="lg">
                <Container className="1">

                <div className="d-flex">
                    <Navbar.Toggle className="pr-5" aria-controls="basic-navbar-nav" />
                    <Nav.Link href="/">
                        <img className="navbar-logo" src="/images/booky-logo.png" alt="Logo"></img>
                    </Nav.Link>
                    <Nav.Link href="/" className="navbar-brand p-2">Booky</Nav.Link>
                </div> 
                
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Søg på titel, forfatter eller ISBN" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                {/* <SearchBar className="searchBar"/> */}
            
                <Navbar.Collapse className="col-sm justify-content-end">
                <Nav>
                    <Nav.Link href="/login"><FontAwesomeIcon icon={faUser} className="me-2"/>User</Nav.Link>
                    <Nav.Link href="/browse">Search</Nav.Link>
                    <Nav.Link href="/upload">Sell</Nav.Link>
                </Nav>
                </Navbar.Collapse>
               
                </Container>
                </Navbar>
            </header>
    );
}

export default Header;