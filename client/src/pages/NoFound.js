import React from 'react';

const NoFound = () => {
  return (
    <div className='notFoundContainer'>
      <div>404</div>
      <h1>Page not found</h1>
      <h4>
        Redirect To <a href='/home'>Home </a>{' '}
      </h4>
    </div>
  );
};

export default NoFound;
