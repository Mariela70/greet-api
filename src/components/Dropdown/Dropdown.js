import React from 'react';
import './dropdown.css';
const Dropdown = ({ options, selectedOption, onSelectChange }) => {
  return (
    <select value={selectedOption} onChange={onSelectChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;