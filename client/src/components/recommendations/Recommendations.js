import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Recommendation from './Recommendation'

class Recommendations extends Component {

  renderRecommendations = () => {
    return this.props.recommendations.map(recommendation => <Recommendation key={recommendation.id} recommendation={recommendation} deleteRecommendation={this.props.deleteRecommendation} />)
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
