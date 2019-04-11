import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { fetchRecommendations } from '../../actions/recommendationActions';
import { connect } from 'react-redux'
import CommentsContainer from '../../containers/CommentsContainer'

class Recommendation extends Component {

  render() {
    const { recommendation } = this.props;

    return (
      <div>
        <h4>{recommendation.title}</h4>
        <div>Description: {recommendation.description}</div>
        <ButtonToolbar>
          <Button variant="info" size="sm">
            Edit
          </Button>
          <Button onClick={() => this.props.deleteRecommendation(recommendation.id)} variant="danger" size="sm">
            Delete
          </Button>
        </ButtonToolbar>
        <CommentsContainer recommendationID={recommendation.id} comments={recommendation.comments} />
      </div>
    );
  }
};

const mapStateToProps = ({ recommendation }) => ({ recommendation })

export default connect(mapStateToProps, { fetchRecommendations })(Recommendation)
