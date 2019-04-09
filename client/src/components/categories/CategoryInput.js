import React, { Component } from 'react';
import { addCategory } from '../../actions/categoryActions';

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

  handleOnSubmit(event) {
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
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            name="category"
            placeholder="or create a new category"
            value={this.state.category}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" value="Create New Category" />
        </form>
      </div>
    );
  }
};


export default connect(null, { addCategory })(CategoryInput)
