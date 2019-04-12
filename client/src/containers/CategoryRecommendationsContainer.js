import React, { Component } from 'react'
import Category from '../components/categories/Category'
import { fetchRecommendations } from '../actions/recommendationActions';
import { connect } from 'react-redux'

class CategoryRecommendationsContainer extends Component {
  componentDidMount() {
    this.props.fetchRecommendations();
  }

  render() {

    return (
      <div>
        <Category recommendations={this.props.recommendations} categoryID={this.props.match.params.id}/>
      </div>
    )
  }
}

const mapStateToProps = ({ recommendations }) => ({ recommendations })

export default connect(mapStateToProps, { fetchRecommendations })(CategoryRecommendationsContainer)
