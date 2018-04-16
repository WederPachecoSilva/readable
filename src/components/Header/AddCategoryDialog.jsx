import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui';
import PropTypes from 'prop-types';

const AddCategoryDialog = ({
  closeDialog,
  handleChange,
  addCategory,
  isOpen,
  category,
}) => (
  <React.Fragment>
    <Dialog open={isOpen} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please, enter the category name you want to create
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="category"
          label="Category"
          value={category}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={() => addCategory(category)} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
);

AddCategoryDialog.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  category: PropTypes.string,
};

export default AddCategoryDialog;
