import React from 'react';
import PropTypes from 'prop-types';

const FieldInput = ({ handleChange, name, value, label }) => (
  <div style={styles.container}>
    <label style={styles.label} htmlFor={name}>
      {label}
    </label>
    <input
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

FieldInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FieldInput;
