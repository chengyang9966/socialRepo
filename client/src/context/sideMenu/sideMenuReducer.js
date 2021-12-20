import { OPEN_SIDE_MENU, CLOSE_SIDE_MENU } from '../types';

const sideMenuReducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDE_MENU:
      return { ...state, showSideBar: false };
    case CLOSE_SIDE_MENU:
      return { ...state, showSideBar: true };
    default:
      return state;
  }
};

export default sideMenuReducer;
