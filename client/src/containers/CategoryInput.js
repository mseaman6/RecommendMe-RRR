import React, { Component } from 'react';
import { addCategory } from '../actions/categoryActions';
import { Form, Button, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux'

class CategoryInput extends Component {

  state = {
    category: ''
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCategorySubmit(event) {
    event.preventDefault();
    debugger;
    this.props.addCategory(this.state.category);
    this.setState({
      category: ''
    });
  }

  render() {
    return (
      <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formCategoryCreate">
            <Form.Control
                type="text"
                name="category"
                value={this.state.category}
                placeholder="or create a new category"
                onChange={(event) => this.handleOnChange(event)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formCategorySubmit">
            <Button onClick={(event) => this.handleCategorySubmit(event)} variant="light" >
              Create New Category
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
      </div>
    );
  }
};


export default connect(null, { addCategory })(CategoryInput)
