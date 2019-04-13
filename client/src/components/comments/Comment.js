import React, { Component } from 'react';
import { Button, ButtonToolbar, ListGroup } from 'react-bootstrap';


class Comment extends Component {

  render() {
    const { comment } = this.props;
    return(
      <ListGroup.Item key={comment.id} >
        <div className="small-margin">{comment.text}</div>
        <ButtonToolbar>
          <Button onClick={() => this.props.deleteComment(comment.recommendation.id, comment.id)} variant="outline-danger" size="sm">
            Delete
          </Button>
        </ButtonToolbar>
      </ListGroup.Item>
    );
  }
};

export default Comment;
