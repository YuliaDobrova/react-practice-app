import React from 'react';
import styles from './MySelect.module.css';

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <>
      {/* <label htmlFor="standard-select">Standard Select</label> */}
      <div className={styles.select}>
        <select
          className={styles.select}
          id="standard-select"
          value={value}
          onChange={e => onChange(e.target.value)}
        >
          <option className={styles.option} disabled value="">
            {defaultValue}
          </option>
          {options.map(option => (
            <option
              className={styles.option}
              key={option.value}
              value={option.value}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default MySelect;
