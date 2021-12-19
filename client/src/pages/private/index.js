import Home from './home';

const PrivateRoute = () => {
  return [
    {
      path: 'home',
      children: <Home />
    }
  ];
};

export default PrivateRoute;
