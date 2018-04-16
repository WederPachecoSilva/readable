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
    this.props.dispatch(fetchPost(this.props.match.params.post_id));
    this.props.dispatch(fetchCommentsByPost(this.props.match.params.post_id));
  }

  render() {
    const { post, comments, dispatch } = this.props;
    const commentsIds = Object.keys(comments);
    return (
      <Grid container justify="center" alignItems="center" spacing={16}>
        {post && <PostCard post={post} dispatch={dispatch} />}
        {commentsIds.map(
          id =>
            comments[id].deleted === false && (
              <CommentCard
                dispatch={dispatch}
                key={id}
                comment={comments[id]}
              />
            )
        )}
        {post && <CommentForm dispatch={dispatch} post={post} />}
      </Grid>
    );
  }
}

const mapState = (state, ownProps) => {
  const postId = ownProps.match.params.post_id;
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
