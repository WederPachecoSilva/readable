// @ts-check

import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, withStyles } from 'material-ui';
import PropTypes from 'prop-types';

import { fetchAllPosts } from '../../actions/posts';
import PostCard from '../PostCard/PostCard';
import withErrorBoundary from '../errorHandling/withErrorBoundary';

class Root extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  render() {
    const { posts, dispatch, classes } = this.props;
    const ids = Object.keys(posts);
    return (
      <React.Fragment>
        {ids.map(id => {
          return posts[id].deleted === false ? (
            <Grid container justify="center" key={id}>
              <PostCard
                className={classes.postCard}
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

const styles = {
  postCard: {
    margin: '2em',
  },
};

Root.propTypes = {
  posts: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    postCard: PropTypes.string.isRequired,
  }),
};

export default withErrorBoundary(withStyles(styles)(connect(mapState)(Root)));
