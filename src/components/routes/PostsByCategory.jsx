import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';

import { fetchAllPosts } from '../../actions/posts';
import {
  FILTER_BY_LIKES,
  FILTER_BY_OLDER,
  FILTER_BY_YOUNGER,
} from '../../actions/types';
import PostCard from '../PostCard/PostCard';
import withErrorBoundary from '../errorHandling/withErrorBoundary';
import { sortByDate, sortByLikes } from '../../utils/helpers';
import Filterable from '../Filterable/Filterable';

class PostsByCategory extends React.Component {
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
      <Grid direction="column" container alignItems="center" justify="center">
        <Filterable style={styles.filterable} dispatch={dispatch} />

        {orderedPosts.map(
          post =>
            posts[post.id].category === this.props.match.params.category && (
              <Grid
                style={styles.cardContainer}
                key={post.id}
                container
                justify="center"
              >
                <PostCard dispatch={dispatch} post={posts[post.id]} />
              </Grid>
            )
        )}
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

PostsByCategory.propTypes = {
  dispatch: PropTypes.func,
  posts: PropTypes.object,
};

export default withErrorBoundary(connect(mapState)(PostsByCategory));
