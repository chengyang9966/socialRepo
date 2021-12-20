import React, { useContext, useEffect, useReducer } from 'react';
import { CLOSE_SIDE_MENU, OPEN_SIDE_MENU } from '../types';
import SideMenuContext from './sideMenuContext';
import sideMenuReducer from './sideMenuReducer';

export const openMenu = (dispatch) => dispatch({ type: CLOSE_SIDE_MENU });
export const closeMenu = (dispatch) => dispatch({ type: OPEN_SIDE_MENU });

export const useSideMenu = () => {
  const item = useContext(SideMenuContext);

  return [item.state, item.dispatch];
};

const SideMenuState = (props) => {
  const initialState = {
    showSideBar: true
  };

  const [state, dispatch] = useReducer(sideMenuReducer, initialState);
  useEffect(() => {
    if (localStorage.getItem('showSideBar') != null) {
      let bool = localStorage.getItem('showSideBar').toLowerCase() === 'true';
      if (bool) {
        closeMenu(dispatch);
      } else {
        openMenu(dispatch);
      }
    }
  }, []);
  return (
    <SideMenuContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SideMenuContext.Provider>
  );
};

export default SideMenuState;
