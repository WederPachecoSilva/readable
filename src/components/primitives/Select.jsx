import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ label, name, value, handleChange, children }) => (
  <div>
    <label style={styles.label} htmlFor="category">
      {label}
    </label>
    <select
      style={styles.select}
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
  select: { display: 'flex' },
};

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Select;
