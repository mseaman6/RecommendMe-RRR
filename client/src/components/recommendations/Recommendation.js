import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ButtonToolbar, Button } from 'react-bootstrap';

class Recommendation extends Component {

  render() {
    let recommendation  = this.props.recommendation;
    if (recommendation) {
      return(
        <ListGroup.Item key={recommendation.id} >
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
      );
    } else {
      return null
    }
  }
};

export default Recommendation;
