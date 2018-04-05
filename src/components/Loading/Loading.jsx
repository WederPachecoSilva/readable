import React from 'react';
import { CircularProgress, withStyles } from 'material-ui';

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

export default withStyles(styles)(Loading);
