import React, { Component } from 'react';
//import CommentsContainer from '../../containers/CommentsContainer'

class Recommendation extends Component {

  render() {
    const { recommendation } = this.props;

    return (
      <div>
        <li>
          {recommendation.title} - {recommendation.description}
          <button onClick={() => this.props.deleteRecommendation(recommendation.id)}> X </button>
          {/*<CommentsContainer recommendation={recommendation}/>*/}
        </li>
      </div>
    );
  }
};

export default Recommendation;
