// @ts-check

import React from 'react';
import { IconButton, Menu, MenuItem, withStyles } from 'material-ui';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCategories } from '../../actions/categories';

class HeaderMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { categories, classes } = this.props;
    const { anchorEl } = this.state;
    const ids = Object.keys(categories);
    const open = Boolean(anchorEl);
    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          className={classes.iconButton}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          {ids.map(id => (
            <MenuItem key={id}>
              <Link to={`/posts/${categories[id].path}`}>
                <p>{categories[id].name}</p>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

const mapState = ({ categories }) => ({
  categories,
});

const styles = {
  iconButton: {
    color: 'grey',
  },
};

HeaderMenu.propTypes = {
  categories: PropTypes.object,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
};

export default withStyles(styles)(connect(mapState)(HeaderMenu));
