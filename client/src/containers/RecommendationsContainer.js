import React, { Component } from 'react'
import Recommendations from '../components/recommendations/Recommendations'
import { fetchRecommendations, deleteRecommendation, addRecommendation } from '../actions/recommendationActions';


import { connect } from 'react-redux'

class RecommendationsContainer extends Component {
  componentDidMount() {
    this.props.fetchRecommendations();
  }

  render() {

    return (
      <div>
        Recommendations
        <Recommendations recommendations={this.props.recommendations} deleteRecommendation={this.props.deleteRecommendation} />
      </div>
    )
  }
}

const mapStateToProps = ({ recommendations }) => ({ recommendations })

export default connect(mapStateToProps, { fetchRecommendations, deleteRecommendation, addRecommendation })(RecommendationsContainer)
