import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import CommentsContainer from '../../containers/CommentsContainer'

class RecommendationShow extends Component {

  getCategory = (category) => category ?  category.name : null


  render() {
    let recommendation = this.props.recommendation;
    let editLink = "/recommendations/" + recommendation.id + "/edit";

    return (
      <div>
        <div className="lower-margin">
          <h2>{recommendation.title}</h2>
          <p>Category: {this.getCategory(recommendation.category)}</p>
          <p>Description: {recommendation.description}</p>
          <div>
            <ButtonToolbar>
              <Button variant="info" size="sm" href={editLink}>
                Edit
              </Button>
              <Button onClick={() => this.props.deleteRecommendation(recommendation.id)} variant="danger" size="sm">
                Delete
              </Button>
            </ButtonToolbar>
          </div>
        </div>
          <CommentsContainer recommendationID={recommendation.id} comments={recommendation.comments} />
      </div>
    );
  }
};

export default RecommendationShow
