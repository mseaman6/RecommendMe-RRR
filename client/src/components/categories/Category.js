import React, { Component } from 'react';
import { ListGroup, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Category extends Component {

  state = {
    category: '',
  }

  setCategoryName = (name) => {
    this.setState({
      category: name
    });
  }
  // componentDidMount() {
  //   this.props.fetchRecommendations();
  // }
  //
  // if (categoryRecs.length > 0) {
  //   categoryName = categoryRecs[0].category.name;
  //   this.setCategoryName(categoryName);
  // };

  renderRecommendations = () => {
    const categoryID = this.props.categoryID;
    const categoryRecs = this.props.recommendations.filter(recommendation => recommendation.category.id === parseInt(categoryID));
    return categoryRecs.map(recommendation => {
      return <ListGroup.Item key={recommendation.id} >
        <Link to={'/recommendations/'+recommendation.id}>{recommendation.title}</Link>
        <div>{recommendation.description}</div>
        <ButtonToolbar>
          <Button variant="info" size="sm">
            Edit
          </Button>
          <Button onClick={() => this.props.deleteRecommendation(recommendation.id)} variant="danger" size="sm">
            Delete
          </Button>
        </ButtonToolbar>
      </ListGroup.Item>
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.category} Recommendations</h2>
        <ListGroup>
          {this.renderRecommendations()}
        </ListGroup>
      </div>
    )
  }
};

export default Category
