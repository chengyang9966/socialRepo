import Login from '../login';
import Home from './home';
import Testing from './testing';

const PrivateRoute = () => {
  return [
    {
      path: 'home',
      children: <Home />
    },
    {
      path: 'login',
      children: <Login />
    },
    {
      path: '',
      children: <Login />
    },
    {
      path: 'dashboard',
      children: <Testing />
    }
  ];
};

export default PrivateRoute;
