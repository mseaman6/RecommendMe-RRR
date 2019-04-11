import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { fetchRecommendations, deleteRecommendation } from '../../actions/recommendationActions';
import { connect } from 'react-redux'
import CommentsContainer from '../../containers/CommentsContainer'

class Recommendation extends Component {

  componentDidMount() {
    this.props.fetchRecommendations();
  }


  render() {
    const { recommendations } = this.props.recommendations;
//    const { recommendationID } = this.props.match.params.id
    console.log({recommendations})
    return (
      <div>

      </div>
    );
  }
};

const mapStateToProps = ({ recommendations }) => ({ recommendations })

export default connect(mapStateToProps, { fetchRecommendations, deleteRecommendation })(Recommendation)
