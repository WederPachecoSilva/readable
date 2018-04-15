// @ts-check

import React from 'react';
import { Menu, MenuItem, withStyles } from 'material-ui';
import { NavLink } from 'react-router-dom';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import PropTypes from 'prop-types';

const CommentMenu = ({
  anchorEl,
  editCommentLink,
  deleteComment,
  closeMenu,
  openMenu,
  classes,
}) => (
  <React.Fragment>
    <MoreVertIcon onClick={openMenu} />

    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
      <NavLink className={classes.editLink} to={editCommentLink}>
        <MenuItem>Edit Comment</MenuItem>
      </NavLink>
      <MenuItem onClick={deleteComment}>Delete Comment</MenuItem>
    </Menu>
  </React.Fragment>
);

const styles = {
  editLink: {
    color: 'black',
    textDecoration: 'none',
  },
};

CommentMenu.propTypes = {
  anchorEl: PropTypes.object,
  editCommentLink: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  openMenu: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentMenu);
