// @ts-check

import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, withStyles, IconButton, Grid } from 'material-ui';
import Delete from 'material-ui-icons/Delete';

const CustomMenuItem = ({
  classes,
  link,
  children,
  deleteCategory,
  closeMenu,
}) => (
  <Grid container direction="row">
    <Link onClick={closeMenu} className={classes.link} to={link}>
      <MenuItem>{children}</MenuItem>
    </Link>
    <IconButton onClick={deleteCategory} className={classes.iconButton}>
      <Delete />
    </IconButton>
  </Grid>
);

const styles = {
  iconButton: {
    color: 'grey',
    marginRight: '0.5em',
    marginLeft: 'auto',
    width: '1.5em',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
};

export default withStyles(styles)(CustomMenuItem);
