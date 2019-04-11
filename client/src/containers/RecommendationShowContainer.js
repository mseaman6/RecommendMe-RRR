import React, { Component } from 'react'
import Recommendation from '../components/recommendations/Recommendation'
import { fetchRecommendations, deleteRecommendation } from '../actions/recommendationActions';
import { connect } from 'react-redux'

class RecommendationShowContainer extends Component {
  componentDidMount() {
    this.props.fetchRecommendations();
  }

  render() {
    debugger;
    return (
      <div>
        <Recommendation recommendations={this.props.recommendations} deleteRecommendation={this.props.deleteRecommendation} recommendationID={this.props.match.params.id} />
      </div>
    )
  }
}

const mapStateToProps = ({ recommendations }) => ({ recommendations })

export default connect(mapStateToProps, { fetchRecommendations, deleteRecommendation })(RecommendationShowContainer)
