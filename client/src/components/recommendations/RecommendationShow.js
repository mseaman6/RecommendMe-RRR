import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import CommentsContainer from '../../containers/CommentsContainer'

class RecommendationShow extends Component {


  render() {
    let recommendation = this.props.recommendation;
    let editLink = "/recommendations/" + recommendation.id + "/edit";
    if (recommendation) {
      return (
        <div>
          <h2>{recommendation.title}</h2>
          <div>Description: {recommendation.description}</div>
          <ButtonToolbar>
            <Button variant="info" size="sm" href={editLink}>
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

export default RecommendationShow
