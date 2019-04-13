import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

class Recommendation extends Component {

  render() {
    let recommendation  = this.props.recommendation;
    if (recommendation) {
      return(
        <ListGroup.Item key={recommendation.id} >
          <Link to={'/recommendations/'+recommendation.id}>{recommendation.title}</Link> - <Link to={'/categories/'+recommendation.category.id}>{recommendation.category.name}</Link>
          <div>{recommendation.description}</div>
        </ListGroup.Item>
      );
    } else {
      return null
    }
  }
};

export default Recommendation;
