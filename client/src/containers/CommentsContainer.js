import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'
import { fetchComments, deleteComment, addComment } from '../actions/commentActions';
import { connect } from 'react-redux'

class CommentsContainer extends Component {

  render() {

    return (
      <div>
        <Comments comments={this.props.comments} deleteComment={this.props.deleteComment} />
      </div>
    )
  }
}

export default connect(null, { deleteComment, addComment })(CommentsContainer)
