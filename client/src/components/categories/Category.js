import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class Category extends Component {


  selectRecommendation = (recommendations) => {
    const recommendationID = this.props.recommendationID;
    return recommendations.filter(recommendation => recommendation.id === parseInt(recommendationID));
  }

  render() {
    const recommendations = this.props.recommendations
    const recommendation = this.selectRecommendation(recommendations)[0]
    if (recommendation) {
      return (
        <div>
          <h2>{recommendation.title}</h2>
          <div>Description: {recommendation.description}</div>
          <ButtonToolbar>
            <Button variant="info" size="sm">
              Edit
            </Button>
            <Button onClick={() => this.props.deleteRecommendation(recommendation.id)} variant="danger" size="sm">
              Delete
            </Button>
          </ButtonToolbar>
          <CommentsContainer recommendationID={recommendation.id} comments={recommendation.comments} />
        </div>
      );
    } else {
      return null
    }
  }
};

export default Category
