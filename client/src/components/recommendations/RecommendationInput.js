import React, { Component } from 'react';

class RecommendationInput extends Component {

  state = {
    title: '',
    description: '',
    category: ''
  }

  handleOnChange(event) {
    this.setState({
      'event.target.name': event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRecommendation(this.state);
    this.setState({
      title: '',
      description: '',
      category: ''
    });
  }

  render() {
    return (
      <div>
        Create a Recommendation:
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>
            Title
            <input
              type="text"
              name="title"
              placeholder="e.g., book name, restaurant name, etc."
              value={this.state.title}
              onChange={(event) => this.handleOnChange(event)} />
          </label>

          <label>
            Description
            <textarea
              name="description"
              placeholder="tell me more..."
              value={this.state.description}
              onChange={(event) => this.handleOnChange(event)} />
          </label>

          <label>
            Category:
            <input
              type="text"
              name="category"
              placeholder=
              value={this.state.category}
              onChange={(event) => this.handleOnChange(event)} />
          <label>

          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RecommendationInput;
