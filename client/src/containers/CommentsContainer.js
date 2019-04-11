import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import CommentInput from '../components/comments/CommentInput'
import { fetchComments, deleteComment, addComment } from '../actions/commentActions';
import { connect } from 'react-redux'

class CommentsContainer extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {

    return (
      <div>
        <Comments comments={this.props.comments} deleteComment={this.props.deleteComment} />
        <CommentInput addComment={this.props.addComment} />
      </div>
    )
  }
}

const mapStateToProps = ({ comments }) => ({ comments })

export default connect(mapStateToProps, { fetchComments, deleteComment, addComment })(CommentsContainer)
