import React, { Component } from 'react';
import { ListGroup, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Category extends Component {

  renderRecommendations = () => {
    if (this.props.category.recommendations) {
      const recommendations = this.props.category.recommendations;
      return recommendations.map(recommendation => {
        return <ListGroup.Item key={recommendation.id} >
          <Link to={'/recommendations/'+recommendation.id}>{recommendation.title}</Link>
          <div>{recommendation.description}</div>
        </ListGroup.Item>
      });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.category.name} Recommendations</h2>
        <ListGroup>
          {this.renderRecommendations()}
        </ListGroup>
      </div>
    )
  }
};

export default Category
