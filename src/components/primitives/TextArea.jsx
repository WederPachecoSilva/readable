import React from 'react';

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

export default TextArea;
