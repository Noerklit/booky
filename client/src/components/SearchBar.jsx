import React from "react";
import { Button, Container, Form} from "react-bootstrap";

// Not used currently, but might be relevant if we need logic for actual searching to work, so we wont have to place it in the header itself

function SearchBar(){
    return (
        <Container class="container-fluid">
              <Form className="d-flex justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Søg på titel, forfatter eller ISBN"
                  className="me-2 rounded-pill"
                  aria-label="Search"
                />
                <Button className="rounded-pill" variant="outline-primary">
                  Search
                </Button>
              </Form>
        </Container>
      );
}

export default SearchBar;