import React from 'react';
import './MySelect.css';

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <>
      {/* <label htmlFor="standard-select">Standard Select</label> */}
      <div className="select">
        <select
          className="select"
          id="standard-select"
          value={value}
          onChange={e => onChange(e.target.value)}
        >
          <option className="option" disabled value="">
            {defaultValue}
          </option>
          {options.map(option => (
            <option className="option" key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default MySelect;
