import React from 'react';

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

export default FieldInput;
