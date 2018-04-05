import React from 'react';
import { Badge, withStyles, Grid } from 'material-ui';
import { ThumbUp, ThumbDown, Message } from 'material-ui-icons';
import PropTypes from 'prop-types';

import Menu from './Menu';
import { votePost, deletePost } from '../../actions/posts';

class CardHeaderAction extends React.Component {
  state = {
    anchorEl: null,
  };

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDelete = () => {
    this.props.dispatch(deletePost(this.props.post.id));
  };

  votePost = vote => {
    this.props.dispatch(votePost(this.props.post.id, vote));
  };

  render() {
    const { post, classes } = this.props;
    const editPostLink = `/edit/${post.id}`;
    const { likeCount, dislikeCount, commentCount } = post;
    return (
      <Grid container justify="center" alignItems="center">
        <Badge
          className={classes.badge}
          badgeContent={likeCount}
          onClick={() => this.votePost('upVote')}
          color="primary"
        >
          <ThumbUp />
        </Badge>
        <Badge
          badgeContent={dislikeCount}
          onClick={() => this.votePost('downVote')}
          color="primary"
        >
          <ThumbDown />
        </Badge>
        <Badge
          className={classes.badge}
          badgeContent={commentCount}
          color="primary"
        >
          <Message />
        </Badge>
        <Menu
          anchorEl={this.state.anchorEl}
          editPostLink={editPostLink}
          handleDelete={this.handleDelete}
          handleClose={this.handleClose}
          openMenu={this.openMenu}
        />
      </Grid>
    );
  }
}

const styles = {
  badge: { margin: '1em' },
};

CardHeaderAction.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default withStyles(styles)(CardHeaderAction);
