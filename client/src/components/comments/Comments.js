import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Comment from './Comment'


class Comments extends Component {

  renderComments = () => {
    return this.props.comments.map( comment => <Comment key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />);
  }

  render() {
    return(
      <div>
        <h4>Comments: </h4>
        <ListGroup>
          {this.renderComments()}
        </ListGroup>
      </div>
    );
  }
};

export default Comments;
