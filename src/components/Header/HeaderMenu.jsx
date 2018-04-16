import React from 'react';
import { IconButton, Menu, MenuItem, withStyles } from 'material-ui';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import v4 from 'uuid/v4';

import {
  fetchCategories,
  addCategory,
  deleteCategory,
} from '../../actions/categories';
import AddCategoryDialog from './AddCategoryDialog';
import CustomMenuItem from './CustomMenuItem';

class HeaderMenu extends React.Component {
  state = {
    anchorEl: null,
    isDialogOpen: false,
    category: '',
  };

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  handleCategoryInput = e => {
    this.setState({ category: e.target.value });
  };

  addCategory = name => {
    const category = {
      id: v4(),
      name,
      path: name,
      timestamp: new Date(),
    };
    this.props.dispatch(addCategory(category));
    this.setState({ isDialogOpen: false, category: '' });
  };

  deleteCategory = id => {
    this.props.dispatch(deleteCategory(id));
  };

  openDialog = () => {
    this.setState({ isDialogOpen: true });
    this.closeMenu();
  };

  closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { categories, classes } = this.props;
    const { anchorEl } = this.state;
    const ids = Object.keys(categories);
    const open = Boolean(anchorEl);
    return (
      <React.Fragment>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          className={classes.iconButton}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={this.closeMenu}>
          {ids.map(
            id =>
              !categories[id].deleted && (
                <CustomMenuItem
                  closeMenu={this.closeMenu}
                  key={id}
                  deleteCategory={() => this.deleteCategory(id)}
                  link={`/${categories[id].path}`}
                >
                  {categories[id].name}
                </CustomMenuItem>
              )
          )}
          <MenuItem onClick={this.openDialog}>Add Category</MenuItem>
        </Menu>
        <AddCategoryDialog
          addCategory={this.addCategory}
          closeDialog={this.closeDialog}
          handleChange={this.handleCategoryInput}
          isOpen={this.state.isDialogOpen}
          category={this.state.category}
        />
      </React.Fragment>
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
  link: {
    color: 'black',
    textDecoration: 'none',
  },
};

HeaderMenu.propTypes = {
  categories: PropTypes.object,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
};

export default withStyles(styles)(connect(mapState)(HeaderMenu));
