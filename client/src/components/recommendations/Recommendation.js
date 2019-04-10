import React, { Component } from 'react';
import { ListGroup, Button, ButtonToolbar } from 'react-bootstrap';
//import CommentsContainer from '../../containers/CommentsContainer'

class Recommendation extends Component {

  render() {
    const { recommendation } = this.props;

    return (
      <div>
        <ListGroup.Item>
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
      </div>
    );
  }
};

export default Recommendation;
