import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';

import { fetchAllPosts } from '../../actions/posts';
import PostCard from '../PostCard/PostCard';
import withErrorBoundary from '../errorHandling/withErrorBoundary';

class PostsByCategory extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  render() {
    const { posts } = this.props;
    const ids = Object.keys(posts);

    return (
      <Grid container justify="center" alignItems="center" spacing={16}>
        {ids.map(
          id =>
            posts[id].category === this.props.match.params.category && (
              <PostCard key={id} post={posts[id]} />
            )
        )}
      </Grid>
    );
  }
}

const mapState = ({ posts }) => ({ posts });

PostsByCategory.propTypes = {
  dispatch: PropTypes.func,
  posts: PropTypes.object,
};

export default withErrorBoundary(connect(mapState)(PostsByCategory));
