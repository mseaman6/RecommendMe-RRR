import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'
import { deleteComment, addComment } from '../actions/commentActions';
import { connect } from 'react-redux'

class CommentsContainer extends Component {

  render() {

    return (
      <div>
        <Comments comments={this.props.comments} deleteComment={this.props.deleteComment} />
        <CommentInput addComment={this.props.addComment} recID={this.props.recommendationID} />
      </div>
    )
  }
}

export default connect(null, { deleteComment, addComment })(CommentsContainer)
