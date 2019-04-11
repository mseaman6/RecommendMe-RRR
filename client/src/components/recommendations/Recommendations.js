import React, { Component, Link } from 'react';
import { ListGroup, ButtonToolbar, Button } from 'react-bootstrap';
import Recommendation from './Recommendation'


class Recommendations extends Component {

  renderRecommendation = (recommendation) => {
    return <Recommendation recommendation={recommendation} />
  }

  renderRecommendations = () => {
    return this.props.recommendations.map(recommendation => {
      return <ListGroup.Item key={recommendation.id} >
        {recommendation.title}
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
    return(
      <div>
        <h2>Recommendations</h2>
        <ListGroup>
          {this.renderRecommendations()}
        </ListGroup>
      </div>
    );
  }
};

export default Recommendations;
