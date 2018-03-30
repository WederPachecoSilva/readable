import React from 'react';

const Alert = ({ children }) => <p style={styles.alert}>{children}</p>;

const styles = {
  alert: {
    backgroundColor: '#FFE4E1',
    padding: '1em',
    borderRadius: '5px',
    border: '1px solid #FFC0CB',
  },
};

export default Alert;
