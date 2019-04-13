import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import CommentsContainer from '../../containers/CommentsContainer';
import { Redirect } from 'react-router-dom'


class RecommendationShow extends Component {

  state = {
    toRecList: false
  }

  getCategory = (category) => category ?  category.name : null

  handleOnClick(rec) {
    this.props.deleteRecommendation(rec);
    this.setState({
      toRecList: true
    });
  }

  render() {
    let recommendation = this.props.recommendation;
    let editLink = "/recommendations/" + recommendation.id + "/edit";

    if (this.state.toRecList) {
      return <Redirect to='/recommendations' />
    };

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
              <Button onClick={() => this.handleOnClick(recommendation.id)} variant="danger" size="sm">
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
