import React, { Component } from 'react';
import Recommendation from './Recommendation'
import { ListGroup } from 'react-bootstrap';


class Recommendations extends Component {

  renderRecommendations = () => {
    return this.props.recommendations.map(recommendation => <Recommendation deleteRecommendation={this.props.deleteRecommendation} key={recommendation.id} recommendation={recommendation} />)
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
