import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'
import { deleteComment, addComment } from '../actions/commentsActions';
import { connect } from 'react-redux'

class CommentsContainer extends Component {

  render() {
    if (this.props.comments) {
      return (
        <div>
          <div className="lower-margin">
            <Comments comments={this.props.comments} deleteComment={this.props.deleteComment} />
          </div>
          <CommentInput addComment={this.props.addComment} recID={this.props.recommendationID} />
        </div>
      )
    } else {
      return null
    }
  }
}

export default connect(null, { deleteComment, addComment })(CommentsContainer)
