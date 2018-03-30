import React from 'react';

const FieldInput = ({ handleChange, name, value, label }) => (
  <div>
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
  label: {},
  input: {},
};

export default FieldInput;
