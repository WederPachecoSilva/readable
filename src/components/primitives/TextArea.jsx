import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ name, rows, value, handleChange, label }) => (
  <div style={styles.container}>
    <label style={styles.label} htmlFor={name}>
      {label}
    </label>
    <textarea
      rows={rows}
      style={styles.input}
      name={name}
      value={value}
      onChange={handleChange}
    />
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {},
  input: {},
};

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
};

export default TextArea;
