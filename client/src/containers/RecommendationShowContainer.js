import React, { Component } from 'react'
import RecommendationShow from '../components/recommendations/RecommendationShow'
import { deleteRecommendation } from '../actions/recommendationsActions'
import { fetchRecommendation } from '../actions/recommendationActions'
import { connect } from 'react-redux'

class RecommendationShowContainer extends Component {
  componentDidMount() {
    const recID = parseInt(this.props.match.params.id);
    this.props.fetchRecommendation(recID);
  }

  render() {
    return (
      <div>
        <RecommendationShow recommendation={this.props.recommendation} deleteRecommendation={this.props.deleteRecommendation} />
      </div>
    )
  }
}

const mapStateToProps = ({ recommendation }) => ({ recommendation })

export default connect(mapStateToProps, { fetchRecommendation, deleteRecommendation })(RecommendationShowContainer)
