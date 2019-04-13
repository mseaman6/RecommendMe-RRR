import React, { Component } from 'react';
import CategoryInput from './CategoryInput'
import { fetchRecommendations, deleteRecommendation, addRecommendation } from '../actions/recommendationsActions';
import { fetchCategories } from '../actions/categoriesActions';
import { Form, Button, Alert } from 'react-bootstrap';

import { connect } from 'react-redux'

class RecommendationInput extends Component {

  state = {
    title: '',
    description: '',
    category_id: '',
    titleAlert: false,
    categoryAlert: false
  }

  componentDidMount() {
    this.props.fetchRecommendations();
    this.props.fetchCategories();
  }

  selectRecommendation = (recommendations) => {
    const recommendationID = this.props.match.params.id;
    if (recommendationID && recommendations.length > 0) {
      const rec = recommendations.filter(recommendation => recommendation.id === parseInt(recommendationID));
      this.setRecommendation(rec[0])
    }
  }

  setRecommendation = (recommendation) => {
    debugger; //need to figure out how to remove from render so not repeated calls to setState
    this.setState({
      title: recommendation.title,
      description: recommendation.description,
      category_id: recommendation.category_id,
    });
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    if (this.state.title && this.state.category_id) {
      this.props.addRecommendation({
        title: this.state.title,
        description: this.state.description,
        category_id: this.state.category_id,
      });
      this.setState({
        title: '',
        description: '',
        category_id: '',
        titleAlert: false,
        categoryAlert: false
      });
    } else if (!this.state.title && !this.state.category_id) {
      this.setState({
        titleAlert: true,
        categoryAlert: true
       });
    } else if (!this.state.title) {
      this.setState({
        titleAlert: true,
        categoryAlert: false
       });
    } else if (!this.state.category_id) {
      this.setState({
        titleAlert: false,
        categoryAlert: true
       });
    }
  }

  renderCategories = () => {
    if (this.props.categories.length > 0) {
      return this.props.categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
    }
  }

  render() {
    this.selectRecommendation(this.props.recommendations);
    return (
      <div className="rec-body">
        <h2>Create a Recommendation:</h2>
        <Alert className="errorTitle" variant="danger" show={this.state.titleAlert} >A title is required.</Alert>
        <Alert className="errorTitle" variant="danger" show={this.state.categoryAlert}>You are required to select a category from the dropdown menu.</Alert>
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
            <Form.Label>Select a Category</Form.Label>
            <Form.Control
              as="select"
              name="category_id"
              placeholder="Select a Category"
              value={this.state.category_id}
              onChange={(event) => this.handleOnChange(event)} >
              <option key={0}>Select</option>
              {this.renderCategories()}
            </Form.Control>
          </Form.Group>
          or
          <CategoryInput />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
};

const mapStateToProps = ( state ) => {
  return ({
    recommendations: state.recommendations,
    categories: state.categories
  })
}

export default connect(mapStateToProps, { fetchRecommendations, addRecommendation, deleteRecommendation, fetchCategories })(RecommendationInput)
