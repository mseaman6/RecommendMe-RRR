import React, { Component } from 'react';
import Recommendation from './Recommendation'

class Recommendations extends Component {

  renderRecommendations = () => {
    return this.props.recommendations.map(recommendation => <Recommendation deleteRecommendation={this.props.deleteRecommendation} key={recommendation.id} recommendation={recommendation} />)
  }

  render() {
    return(
      <ul>
        {this.renderRecommendations()}
      </ul>
    );
  }
};

export default Recommendations;
