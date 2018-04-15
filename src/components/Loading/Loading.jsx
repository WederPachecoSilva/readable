import React from 'react';
import { CircularProgress, withStyles } from 'material-ui';
import PropTypes from 'prop-types';

const Loading = ({ classes }) => (
  <div className={classes.container}>
    <CircularProgress size={60} />
  </div>
);

const styles = {
  container: {
    height: '60px',
    width: '60px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '6em',
  },
};

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);
