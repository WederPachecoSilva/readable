import React from 'react';

const TextArea = ({ name, rows, value, handleChange, label }) => (
  <div>
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
  label: {},
  input: {},
};

export default TextArea;
