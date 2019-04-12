import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { fetchCategories } from '../actions/categoryActions';

import { connect } from 'react-redux'

class NavigationBar extends React.Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  renderCategories = () => {
    if (this.props.categories.length > 0) {
      return this.props.categories.map(category => <NavDropdown.Item key={category.id} href={`/categories/${category.id}`}>{category.name}</NavDropdown.Item>)
    }
  }

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
                  {this.renderCategories()}
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
