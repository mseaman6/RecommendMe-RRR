import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { fetchCategories } from '../actions/categoryActions';

import { connect } from 'react-redux'

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="container light-fade">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">RecommendMe</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/recommendations">Recommendations</Nav.Link>
                <Nav.Link href="/recommendations/new">Create Recommendation</Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">

                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
  )};
};

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps, { fetchCategories })(NavigationBar)
