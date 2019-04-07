import React, { Component } from 'react'
import Recommendations from '../components/recommendations/Recommendations'

import { connect } from 'react-redux'

class RecommendationsContainer extends Component {

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

const mapDispatchToProps = dispatch => ({
//  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text }),
  deleteRecommendation: id => dispatch({ type: "DELETE_RECOMMENDATION", id }),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationsContainer)
