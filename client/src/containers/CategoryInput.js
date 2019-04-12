import React, { Component } from 'react';
import { addCategory } from '../actions/categoryActions';
import { FormControl, Button, InputGroup } from 'react-bootstrap';

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
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          name="category"
          value={this.state.category}
          placeholder="create a new category"
          onChange={(event) => this.handleOnChange(event)} />
        <InputGroup.Append>
          <Button onClick={(event) => this.handleCategorySubmit(event)} variant="light">
            Create New Category
          </Button>
        </InputGroup.Append>
      </InputGroup>
      </div>
    );
  }
};


export default connect(null, { addCategory })(CategoryInput)
