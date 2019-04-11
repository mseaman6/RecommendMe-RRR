import React, { Component } from 'react';
//import CategoryInput from './CategoryInput'
import { addRecommendation } from '../actions/recommendationActions';
import { fetchCategories } from '../actions/categoryActions';
import { Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux'

class RecommendationInput extends Component {

  state = {
    title: '',
    description: '',
    category_id: ''
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    debugger;
    this.props.addRecommendation(this.state);
    this.setState({
      title: '',
      description: '',
      category_id: ''
    });
  }

  renderCategories = () => {
    return this.props.categories.map(category => <option value={category.id}>{category.name}</option>)
  }

  render() {
    return (
      <div>
        <h2>Create a Recommendation:</h2>
        <Form onSubmit={(event) => this.handleOnSubmit(event)}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={this.state.title}
              placeholder="e.g., book name, restaurant name, etc."
              onChange={(event) => this.handleOnChange(event)} />
            <Form.Text className="text-muted">
              What are you recommending?
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows="3"
              placeholder="tell me more..."
              value={this.state.description}
              onChange={(event) => this.handleOnChange(event)} />
          </Form.Group>

          <Form.Group controlId="formCategorySelect">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category_id"
              placeholder="Select a Category"
              value={this.state.category}
              onChange={(event) => this.handleOnChange(event)} >
            {this.renderCategories()}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
};

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps, { addRecommendation, fetchCategories })(RecommendationInput)
