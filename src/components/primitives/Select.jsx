import React from 'react';

const Select = ({ label, name, value, handleChange, children }) => (
  <div>
    <label style={styles.label} htmlFor="category">
      {label}
    </label>
    <select
      style={styles.input}
      name={name}
      value={value}
      onChange={handleChange}
    >
      {children}
    </select>
  </div>
);

const styles = {
  label: {},
  input: {},
};

export default Select;
