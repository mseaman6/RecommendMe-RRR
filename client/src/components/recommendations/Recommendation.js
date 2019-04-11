import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import CommentsContainer from '../../containers/CommentsContainer'

class Recommendation extends Component {

  recommendationSelector = () => {
    debugger;
    const { recommendations } = this.props.recommendations
    const { recommendationID } = this.props.recommendationID;
    console.log(recommendations)
  }

  render() {
    return (
      <div>
        Recommendation Show Page
        {this.recommendationSelector()}
      </div>
    );
  }
};

export default Recommendation
