// @ts-check

import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { Link, withRouter } from 'react-router-dom';

import HeaderMenu from './HeaderMenu';

const Header = ({ location, categories }) => {
  const { pathname } = location;
  return (
    <AppBar position="static" style={styles.container}>
      <Toolbar>
        <Typography variant="title" color="inherit" style={styles.brand}>
          Title
        </Typography>
        <div style={styles.links}>
          {pathname !== '/' && (
            <Link style={styles.link} to="/">
              <p>Home</p>
            </Link>
          )}
          {pathname !== '/add' && (
            <Link style={styles.link} to="/add">
              <p>Add Post</p>
            </Link>
          )}

          <HeaderMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  container: {
    marginBottom: '1em',
    background: 'linear-gradient(to right, lightBlue, white)',
    borderBottom: '0.5px black solid',
  },
  brand: {
    marginLeft: '4em',
    color: 'grey',
  },
  link: {
    color: 'grey',
    margin: 'auto 1em',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: '1em',
  },
};

export default withRouter(Header);
