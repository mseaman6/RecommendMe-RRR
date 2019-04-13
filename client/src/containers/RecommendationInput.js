import React, { Component } from 'react';
import CategoryInput from './CategoryInput'
import { fetchRecommendations, deleteRecommendation, addRecommendation, editRecommendation } from '../actions/recommendationsActions';
import { fetchCategories } from '../actions/categoriesActions';
import { Form, Button, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

class RecommendationInput extends Component {

  state = {
    title: '',
    description: '',
    category_id: '',
    recommendation_id: '',
    titleAlert: false,
    categoryAlert: false,
    loadRecData: false,
    editStatus: false,
    toRecList: false
  }

  componentDidMount() {
    this.props.fetchRecommendations();
    this.props.fetchCategories();
    if (this.props.match.params.id) {
      this.setState({loadRecData: true, editStatus: true});
    }
  }

  componentWillUnmount() {
    this.setState({loadRecData: false, editStatus: false});
  }

  selectRecommendation = (recommendations) => {
    const recommendationID = this.props.match.params.id;
    const rec = recommendations.filter(recommendation => recommendation.id === parseInt(recommendationID));
    this.setRecommendation(rec[0])
  }

  setRecommendation = (recommendation) => {
    this.setState({
      title: recommendation.title,
      description: recommendation.description,
      category_id: recommendation.category_id,
      recommendation_id: recommendation.id,
      loadRecData: false
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
      if (this.state.editStatus) {
        this.props.editRecommendation(this.state.recommendation_id, {
          title: this.state.title,
          description: this.state.description,
          category_id: this.state.category_id,
        })
      } else {
        this.props.addRecommendation({
          title: this.state.title,
          description: this.state.description,
          category_id: this.state.category_id,
        });
      }
      this.setState({
        title: '',
        description: '',
        category_id: '',
        recommendation_id: '',
        titleAlert: false,
        categoryAlert: false,
        loadRecData: false,
        editStatus: false,
        toRecList: true
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

  submitText = () => this.state.editStatus ?  "Update Recommendation" : "Submit"

  titleText = () => this.state.editStatus ?  "Edit Recommendation" : "Create a Recommendation"

  render() {
    let recommendations = this.props.recommendations;
    if (recommendations.length > 0 && this.state.loadRecData) {
      this.selectRecommendation(recommendations)
    };

    if (this.state.toRecList) {
      return <Redirect to='/recommendations' />
    };

    return (
      <div className="rec-body">
        <h2>{this.titleText()}</h2>
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
            {this.submitText()}
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

export default connect(mapStateToProps, { fetchRecommendations, addRecommendation, deleteRecommendation, editRecommendation, fetchCategories })(RecommendationInput)
