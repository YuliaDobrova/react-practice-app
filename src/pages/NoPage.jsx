import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>THIS PAGE DOES NOT EXSIST</h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h3>Go to the</h3>
        <Link to="/">
          <h3
            style={{
              color: '#61dafb',
              cursor: 'pointer',
              textDecoration: 'Underline',
              marginLeft: 10,
            }}
          >
            Home Page
          </h3>
        </Link>
      </div>
    </>
  );
};

export default NoPage;
