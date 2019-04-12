import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigBar = () => {
  return (
    <div className="container light-fade">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">RecommendMe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/recommendations">Recommendations</Nav.Link>
              <Nav.Link href="/recommendations/new">Create Recommendation</Nav.Link>
              <Nav.Link href="/categories">Categories</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigBar;
