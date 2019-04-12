import React, { Component } from 'react'
import Category from '../components/categories/Category'
import { fetchCategory } from '../actions/categoryActions';
import { connect } from 'react-redux'

class CategoryRecommendationsContainer extends Component {

  componentDidMount() {
    const catID = parseInt(this.props.match.params.id)
    this.props.fetchCategory(catID)
  }

  render() {
    return (
      <div>
        <Category category={this.props.category} />
      </div>
    )
  }
}

const mapStateToProps = ({ category }) => ({ category })

export default connect(mapStateToProps, { fetchCategory })(CategoryRecommendationsContainer)
