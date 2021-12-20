import React from 'react';

const Navbar = (props) => {
  return (
    <nav
      style={{ zIndex: 1000 }}
      className='navbar navbar-expand-lg navbar-dark sticky-top bg-dark'
    >
      <a
        style={{ marginLeft: -10 }}
        className={`navbar-brand col-sm-3 ${
          props.showSideBar ? 'col-md-2' : 'col-md-1'
        } mr-0 d-flex align-items-center justify-content-center`}
        href='/home'
      >
        <img
          src={process.env.PUBLIC_URL + '/cylogo.png'}
          alt='logo'
          width={100}
          height={40}
          style={{ objectFit: 'cover' }}
        />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav  ml-md-auto'>
          <li className='nav-item'>
            <a
              onClick={() => {
                localStorage.clear();
              }}
              className='nav-link '
              href='/login'
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
