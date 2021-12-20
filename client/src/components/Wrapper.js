import React, {
  useEffect,
  useState,
  cloneElement,
  Children,
  isValidElement
} from 'react';
import {
  closeMenu,
  openMenu,
  useSideMenu
} from '../context/sideMenu/sideMenuState';

import Navbar from './Navbar';
import SideNavbar from './sideNavbar';

/**
 * Properties
 * @param  {*} sideMenu show side Menu
 * 
 * 
 *! required props 
 * @param children
 
 */
const Wrapper = ({ children, ...rest }) => {
  const [initialSideMenu, dispatchSideMenu] = useSideMenu();
  const { showSideBar } = initialSideMenu;
  return (
    <div>
      <Navbar showSideBar={showSideBar} />
      <div className='container-fluid'>
        <div
          style={{ overflow: 'hidden' }}
          className={`${showSideBar ? 'col-md-10' : 'col-md-11'} ml-sm-auto ${
            showSideBar ? 'col-lg-10' : 'col-lg-11'
          } pt-3 px-4`}
        >
          {children}
        </div>
      </div>
      {rest.sideMenu ? (
        <div className='row'>
          <SideNavbar
            showSideBar={showSideBar}
            SetShowSideBar={(value) =>
              value ? openMenu(dispatchSideMenu) : closeMenu(dispatchSideMenu)
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default Wrapper;
