// @ts-check

import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'material-ui';

import PostCard from '../PostCard';
import withErrorBoundary from '../errorHandling/withErrorBoundary';

const Root = ({ posts, dispatch }) => {
  const ids = Object.keys(posts);
  return (
    <React.Fragment>
      {ids.map(id => (
        <Grid container justify="center" key={id}>
          <PostCard
            style={{ margin: '2em' }}
            post={posts[id]}
            dispatch={dispatch}
          />
        </Grid>
      ))}
    </React.Fragment>
  );
};

const mapState = state => ({ posts: state.posts });

export default withErrorBoundary(connect(mapState)(Root));
