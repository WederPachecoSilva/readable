import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';

import { fetchAllPosts } from '../../actions/posts';
import PostCard from '../PostCard/PostCard';
import withErrorBoundary from '../errorHandling/withErrorBoundary';
import { sortByDate, sortByLikes } from '../../utils/helpers';
import {
  FILTER_BY_LIKES,
  FILTER_BY_OLDER,
  FILTER_BY_YOUNGER,
} from '../../actions/types';
import Filterable from '../Filterable/Filterable';

class Root extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
  }

  /**
   * Given a kind of filter it changes an object of posts by its
   * id into an array of posts ordered by its filter
   */
  orderPosts = filterBy => {
    const { posts } = this.props;
    const ids = Object.keys(posts);
    const postsArr = ids.map(id => posts[id]);

    switch (filterBy) {
      case FILTER_BY_LIKES:
        return sortByLikes(postsArr);

      case FILTER_BY_OLDER:
        return sortByDate('descendant', postsArr);

      case FILTER_BY_YOUNGER:
        return sortByDate('ascendant', postsArr);

      default:
        return;
    }
  };

  render() {
    const { posts, filterBy, dispatch } = this.props;
    const orderedPosts = this.orderPosts(filterBy);

    return (
      <Grid container direction="column" alignItems="center">
        <Filterable dispatch={dispatch} />

        {orderedPosts.map(post => {
          return posts[post.id].deleted === false ? (
            <Grid
              style={styles.cardContainer}
              key={post.id}
              container
              justify="center"
            >
              <PostCard
                key={post.id}
                post={posts[post.id]}
                dispatch={dispatch}
              />
            </Grid>
          ) : null;
        })}
      </Grid>
    );
  }
}

const mapState = ({ posts, filterBy }) => ({ posts, filterBy });

const styles = {
  cardContainer: {
    marginBottom: '0.3em',
  },
};

Root.propTypes = {
  posts: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default withErrorBoundary(connect(mapState)(Root));
