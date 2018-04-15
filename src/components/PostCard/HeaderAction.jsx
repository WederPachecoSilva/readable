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
    const editPostLink = `/edit/post/${post.id}`;
    const { likeCount, dislikeCount, commentCount } = post;
    return (
      <Grid container justify="center" alignItems="center">
        <Badge
          className={classes.likeCount}
          badgeContent={likeCount}
          onClick={() => this.votePost('upVote')}
          color="primary"
        >
          <ThumbUp />
        </Badge>
        <Badge
          className={classes.dislikeCount}
          badgeContent={dislikeCount}
          onClick={() => this.votePost('downVote')}
          color="primary"
        >
          <ThumbDown />
        </Badge>
        {this.props.match.path !== '/:category/:post_id' && (
          <Badge
            badgeContent={commentCount}
            color="primary"
            classes={{ root: classes.comment }}
          >
            <Message />
          </Badge>
        )}
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
  likeCount: { margin: '1em' },
  dislikeCount: { marginRight: '1em' },
  comment: { marginRight: '0.5em', color: 'grey' },
};

CardHeaderAction.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object,
  dispatch: PropTypes.func,
};

export default withStyles(styles)(CardHeaderAction);
