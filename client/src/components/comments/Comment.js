import React, { Component, Link } from 'react';
import { Button, ButtonToolbar, ListGroup } from 'react-bootstrap';


class Comment extends Component {

  render() {
    const { comment } = this.props;

    return(
      <ListGroup.Item key={comment.id} >
        {comment.text}
        <ButtonToolbar>
          <Button variant="outline-info" size="sm">
            Edit
          </Button>
          <Button onClick={() => this.props.deleteComment(comment.id)} variant="outline-danger" size="sm">
            Delete
          </Button>
        </ButtonToolbar>
      </ListGroup.Item>
    );
  }
};

export default Comment;
