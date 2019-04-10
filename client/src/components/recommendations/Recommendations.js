import React, { Component } from 'react';
import { ListGroup, ButtonToolbar, Button } from 'react-bootstrap';

class Recommendations extends Component {

  renderRecommendations = () => {
    return this.props.recommendations.map(recommendation => {
      return <ListGroup.Item>
        <h4>{recommendation.title}</h4>
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
