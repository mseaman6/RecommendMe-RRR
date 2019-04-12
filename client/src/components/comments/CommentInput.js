import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';


class CommentInput extends Component {

  state = {
    text: '',
    recommendation_id: this.props.recID
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.props.recID, this.state);
    this.setState({
      text: '',
      recommendation_id: ''
    });
  }

  render() {
    return (
      <div>
        <h4>Create a Comment:</h4>
        <Form onSubmit={(event) => this.handleOnSubmit(event)}>
          <Form.Group controlId="formText">
            <Form.Control
              type="text"
              name="text"
              value={this.state.text}
              placeholder="thoughts..."
              onChange={(event) => this.handleOnChange(event)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
};

export default CommentInput
