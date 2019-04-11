import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'

class CommentsContainer extends Component {

  render() {

    return (
      <div>
        <Comments comments={this.props.comments} />
      </div>
    )
  }
}

export default CommentsContainer
