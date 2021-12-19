import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoFound = () => {
  // const navigate=useNavigate()
  return (
    <div className='notFoundContainer'>
      <div>404</div>
      <h1>Page not found</h1>
      <h4>
        Redirect To <a href='/'>Login</a>{' '}
      </h4>
    </div>
  );
};

export default NoFound;
