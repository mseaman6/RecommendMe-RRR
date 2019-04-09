import React, { Component } from 'react'
import Recommendations from '../components/recommendations/Recommendations'
import RecommendationInput from '../components/recommendations/RecommendationInput'
import { fetchRecommendations, deleteRecommendation, addRecommendation } from '../actions/recommendationActions';


import { connect } from 'react-redux'

class RecommendationsContainer extends Component {
  componentDidMount() {
    this.props.fetchRecommendations();
  }

  render() {

    return (
      <div>
        <div>
          New Recommendation
          <RecommendationInput addRecommendation={this.props.addRecommendation} />
        </div>
        <div>
          Recommendations
          <Recommendations recommendations={this.props.recommendations} deleteRecommendation={this.props.deleteRecommendation} />
        </div>
      </div>
    )
  }
}

//const mapStateToProps = state => {
//  return { recommendations: state.recommendations }
//}

const mapStateToProps = ({ recommendations }) => ({ recommendations })

export default connect(mapStateToProps, { fetchRecommendations, deleteRecommendation, addRecommendation })(RecommendationsContainer)
