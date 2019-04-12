import React, { Component } from 'react'
import Category from '../components/categories/Category'
import { fetchRecommendations } from '../actions/recommendationsActions';
import { fetchCategories } from '../actions/categorieActions';
import { connect } from 'react-redux'

class CategoryRecommendationsContainer extends Component {
  componentDidMount() {
    this.props.fetchRecommendations();
    this.props.fetchCategories
  }

  render() {

    return (
      <div>
        <Category recommendations={this.props.recommendations} categoryID={this.props.match.params.id}/>
      </div>
    )
  }
}

const mapStateToProps = ({ category }) => ({ category })

export default connect(mapStateToProps, { fetchCategory )(CategoryRecommendationsContainer)
