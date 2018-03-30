// @ts-check

import React from 'react';
import { Menu, MenuItem, withStyles } from 'material-ui';
import { NavLink } from 'react-router-dom';

const PostCardMenu = ({
  anchorEl,
  editPostLink,
  handleDeleteMenu,
  handleCloseMenu,
  classes,
}) => (
  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
    <MenuItem>
      <NavLink className={classes.editLink} to={editPostLink}>
        Edit Post
      </NavLink>
    </MenuItem>
    <MenuItem onClick={handleDeleteMenu}>Delete Post</MenuItem>
  </Menu>
);

const styles = {
  editLink: {
    color: 'black',
  },
};

export default withStyles(styles)(PostCardMenu);
