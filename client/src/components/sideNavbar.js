import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import pageName from '../utils/pageName';
const SideNavbar = ({ showSideBar, SetShowSideBar }) => {
  const Navbar = [
    {
      icon: (show) => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`feather ${show} feather-home`}
        >
          <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
          <polyline points='9 22 9 12 15 12 15 22'></polyline>
        </svg>
      ),
      name: 'Dashboard',
      path: '/home'
    },
    {
      icon: (show) => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`feather ${show} feather-file`}
        >
          <path d='M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'></path>
          <polyline points='13 2 13 9 20 9'></polyline>
        </svg>
      ),
      name: 'Orders',
      path: '/dashboard'
    },
    {
      icon: (show) => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`feather ${show} feather-shopping-cart`}
        >
          <circle cx='9' cy='21' r='1'></circle>
          <circle cx='20' cy='21' r='1'></circle>
          <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
        </svg>
      ),
      name: 'Product',
      path: '/home'
    },
    {
      icon: (show) => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`feather ${show} feather-users`}
        >
          <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
          <circle cx='9' cy='7' r='4'></circle>
          <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
          <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
        </svg>
      ),
      name: 'Customers',
      path: '/home'
    },
    {
      icon: (show) => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`feather ${show} feather-bar-chart-2`}
        >
          <line x1='18' y1='20' x2='18' y2='10'></line>
          <line x1='12' y1='20' x2='12' y2='4'></line>
          <line x1='6' y1='20' x2='6' y2='14'></line>
        </svg>
      ),
      name: 'Reports',
      path: '/home'
    },
    {
      icon: (show) => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`feather ${show} feather-layers`}
        >
          <polygon points='12 2 2 7 12 12 22 7 12 2'></polygon>
          <polyline points='2 17 12 22 22 17'></polyline>
          <polyline points='2 12 12 17 22 12'></polyline>
        </svg>
      ),
      name: 'Integrations',
      path: '/home'
    }
  ];
  const ShowIcon = (path, showSideBar) => {
    if (path && showSideBar) {
      return 'active hide-text';
    }
    if (path) {
      return 'active';
    }
    if (showSideBar) {
      return 'hide-text';
    }
    return '';
  };
  return (
    <nav
      className={`${
        showSideBar ? 'col-md-2' : 'col-md-1'
      } d-none d-md-block bg-light sidebar`}
    >
      <div
        className={`${showSideBar ? 'col-md-2' : 'col-md-1'} sidebar-sticky`}
      >
        <ul className='nav flex-column'>
          {Navbar.map((w) => {
            return (
              <li key={w.name} className='nav-item'>
                <a className='nav-link d-flex align-items-center' href={w.path}>
                  {w.icon(ShowIcon(pageName(w.path), !showSideBar))}
                  {showSideBar && (
                    <div style={{ marginTop: 5, marginLeft: 10 }}>
                      {' '}
                      {w.name}
                    </div>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        <div
          className={`d-flex align-items-center justify-content-center bg-light navigate-btn`}
          style={{
            left: ` ${showSideBar ? '15.566667%' : '7.233333%'}`
          }}
          onClick={() => SetShowSideBar(!showSideBar)}
        >
          <motion.div
            animate={{ rotate: showSideBar ? -180 : 0 }}
            transition={{ duration: 1 }}
          >
            {'>'}
          </motion.div>
        </div>
        {/* <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
          <span>Saved reports</span>
          <a className='d-flex align-items-center text-muted' href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-plus-circle'
            >
              <circle cx='12' cy='12' r='10'></circle>
              <line x1='12' y1='8' x2='12' y2='16'></line>
              <line x1='8' y1='12' x2='16' y2='12'></line>
            </svg>
          </a>
        </h6>
        <ul className='nav flex-column mb-2'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-file-text'
              >
                <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                <polyline points='14 2 14 8 20 8'></polyline>
                <line x1='16' y1='13' x2='8' y2='13'></line>
                <line x1='16' y1='17' x2='8' y2='17'></line>
                <polyline points='10 9 9 9 8 9'></polyline>
              </svg>
              Current month
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-file-text'
              >
                <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                <polyline points='14 2 14 8 20 8'></polyline>
                <line x1='16' y1='13' x2='8' y2='13'></line>
                <line x1='16' y1='17' x2='8' y2='17'></line>
                <polyline points='10 9 9 9 8 9'></polyline>
              </svg>
              Last quarter
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-file-text'
              >
                <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                <polyline points='14 2 14 8 20 8'></polyline>
                <line x1='16' y1='13' x2='8' y2='13'></line>
                <line x1='16' y1='17' x2='8' y2='17'></line>
                <polyline points='10 9 9 9 8 9'></polyline>
              </svg>
              Social engagement
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-file-text'
              >
                <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                <polyline points='14 2 14 8 20 8'></polyline>
                <line x1='16' y1='13' x2='8' y2='13'></line>
                <line x1='16' y1='17' x2='8' y2='17'></line>
                <polyline points='10 9 9 9 8 9'></polyline>
              </svg>
              Year-end sale
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default SideNavbar;
