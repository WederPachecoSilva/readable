import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';

import PostCard from '../PostCard/PostCard';
import CommentCard from '../CommentCard/CommentCard';
import { fetchCommentsByPost } from '../../actions/comments';
import { fetchPost } from '../../actions/posts';
import withErrorBoundary from '../errorHandling/withErrorBoundary';
import CommentForm from '../CommentForm/CommentForm';

class PostDetail extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.match.params.id));
    this.props.dispatch(fetchCommentsByPost(this.props.match.params.id));
  }

  render() {
    const { post, comments } = this.props;
    const commentsIds = Object.keys(comments);
    return (
      <Grid container justify="center" alignItems="center" spacing={16}>
        {post && <PostCard post={post} />}
        {commentsIds.map(id => <CommentCard key={id} comment={comments[id]} />)}
        {post && <CommentForm post={post} />}
      </Grid>
    );
  }
}

const mapState = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  return {
    post: state.posts[postId],
    comments: state.comments,
  };
};

PostDetail.propTypes = {
  dispatch: PropTypes.func,
  post: PropTypes.object,
  comments: PropTypes.object,
};

export default connect(mapState)(withErrorBoundary(PostDetail));
