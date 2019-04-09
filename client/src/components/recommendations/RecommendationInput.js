import React, { Component } from 'react';
//import CategoryInput from '../components/categories/CategoryInput'
import { fetchCategories } from '../../actions/categoryActions';

import { connect } from 'react-redux'

class RecommendationInput extends Component {

  state = {
    title: '',
    description: '',
    category: ''
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleOnChange(event) {
    this.setState({
      'event.target.name': event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    debugger;
    this.props.addRecommendation(this.state);
    this.setState({
      title: '',
      description: '',
      category: ''
    });
  }

  renderCategories = () => {
    return this.props.categories.map(category => <option value={category.name}>{category.name}</option>)
  }

  render() {
    return (
      <div>
        Create a Recommendation:
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="e.g., book name, restaurant name, etc."
              value={this.state.title}
              onChange={(event) => this.handleOnChange(event)} />
          </label>
          <div></div>
          <label>
            Description:
            <textarea
              name="description"
              placeholder="tell me more..."
              value={this.state.description}
              onChange={(event) => this.handleOnChange(event)} />
          </label>
          <div></div>
          <label>
            Category:
            <select
              name="category"
              placeholder="Select a Category"
              value={this.state.category}
              onChange={(event) => this.handleOnChange(event)}>
              {this.renderCategories()}
            </select>
            <input
              type="text"
              name="category"
              placeholder="or create a new category"
              value={this.state.category}
              onChange={(event) => this.handleOnChange(event)} />
          </label>
          <div></div>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps, { fetchCategories })(RecommendationInput)
