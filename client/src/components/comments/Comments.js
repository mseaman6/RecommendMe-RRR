import React, { Component } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import Comment from './Comment'


class Comments extends Component {

  renderComments = () => {
    return this.props.comments.map(comment => {
      <Comment comment={comment} />
    });
  }

  render() {
    return(
      <div>
        <h2>Comments</h2>
        <ListGroup>
          {this.renderComments()}
        </ListGroup>
      </div>
    );
  }
};

export default Comments;
