// @ts-check

import React from 'react';
import { Menu, MenuItem } from 'material-ui';
import { NavLink } from 'react-router-dom';

const PostCardMenu = ({
  anchorEl,
  editPostLink,
  handleDeleteMenu,
  handleCloseMenu,
}) => (
  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
    <MenuItem>
      <NavLink to={editPostLink}>Edit Post</NavLink>
    </MenuItem>
    <MenuItem onClick={handleDeleteMenu}>Delete Post</MenuItem>
  </Menu>
);

export default PostCardMenu;
