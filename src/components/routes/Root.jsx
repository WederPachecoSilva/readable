// @ts-check

import * as React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

import { fetchAllPosts } from '../../actions/posts';
import PostCard from '../PostCard/PostCard';
import withErrorBoundary from '../errorHandling/withErrorBoundary';

class Root extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  render() {
    const { posts, dispatch } = this.props;
    const ids = Object.keys(posts);
    return (
      <React.Fragment>
        {ids.map(id => {
          return posts[id].deleted === false ? (
            <Grid container justify="center" key={id}>
              <PostCard
                style={{ margin: '2em' }}
                post={posts[id]}
                dispatch={dispatch}
              />
            </Grid>
          ) : null;
        })}
      </React.Fragment>
    );
  }
}

const mapState = state => ({ posts: state.posts });

export default withErrorBoundary(connect(mapState)(Root));
