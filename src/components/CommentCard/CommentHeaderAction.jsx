// @ts-check

import React from 'react';
import { Badge, withStyles, Grid } from 'material-ui';
import { ThumbUp, ThumbDown } from 'material-ui-icons';
import PropTypes from 'prop-types';

import CommentMenu from './CommentMenu';
import { voteComment, deleteComment } from '../../actions/comments';

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
    this.props.dispatch(deleteComment(this.props.comment.id));
  };

  voteComment = vote => {
    this.props.dispatch(voteComment(this.props.comment.id, vote));
  };

  render() {
    const { comment, classes } = this.props;
    const editCommentLink = `/edit/comment/${comment.id}`;
    const { likeCount, dislikeCount } = comment;
    return (
      <Grid container justify="center" alignItems="center">
        <Badge
          className={classes.likeCount}
          badgeContent={likeCount}
          onClick={() => this.voteComment('upVote')}
          color="primary"
        >
          <ThumbUp />
        </Badge>
        <Badge
          badgeContent={dislikeCount}
          onClick={() => this.voteComment('downVote')}
          color="primary"
          className={classes.dislikeCount}
        >
          <ThumbDown />
        </Badge>
        <CommentMenu
          anchorEl={this.state.anchorEl}
          editCommentLink={editCommentLink}
          deleteComment={this.handleDelete}
          closeMenu={this.handleClose}
          openMenu={this.openMenu}
        />
      </Grid>
    );
  }
}

const styles = {
  likeCount: { margin: '1em' },
  dislikeCount: { marginRight: '1em' },
};

CardHeaderAction.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object,
  dispatch: PropTypes.func,
};

export default withStyles(styles)(CardHeaderAction);
