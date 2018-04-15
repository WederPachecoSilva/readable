import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderMenu from './HeaderMenu';

const Header = ({ location, categories }) => {
  const { pathname } = location;
  return (
    <AppBar position="static" style={styles.container}>
      <Toolbar>
        <Typography variant="title" color="inherit" style={styles.brand}>
          Readable
        </Typography>
        <div style={styles.links}>
          {pathname !== '/' && (
            <Link style={styles.link} to="/">
              <p>Home</p>
            </Link>
          )}
          {pathname !== '/add/post' && (
            <Link style={styles.link} to="/add/post">
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

Header.propTypes = {
  location: PropTypes.object.isRequired,
  categories: PropTypes.object,
};

export default withRouter(Header);
