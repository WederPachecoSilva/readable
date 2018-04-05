import React from 'react';
import { Menu, MenuItem, withStyles } from 'material-ui';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostCardMenu = ({
  anchorEl,
  editPostLink,
  handleDelete,
  handleClose,
  classes,
  openMenu,
}) => (
  <div>
    <MoreVertIcon onClick={openMenu} />

    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      <MenuItem>
        <NavLink className={classes.link} to={editPostLink}>
          Edit Post
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleDelete}>
        <NavLink className={classes.link} to="/">
          Delete Post
        </NavLink>
      </MenuItem>
    </Menu>
  </div>
);

PostCardMenu.propTypes = {
  anchorEl: PropTypes.object,
  editPostLink: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  openMenu: PropTypes.func.isRequired,
};

const styles = {
  link: {
    color: 'black',
    textDecoration: 'none',
  },
};

export default withStyles(styles)(PostCardMenu);
