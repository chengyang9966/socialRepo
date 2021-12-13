import './App.css';
import Login from './pages/login';
import AlertState from './context/Alert/alertState';
import Alerts from './components/Alert';
import NoFound from './pages/NoFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import PrivateRoute from './utils/privateRoute';
import AuthState from './context/auth/AuthState';
import Loading from './components/Loading';
import Home from './pages/home';

function App() {
  return (
    <AuthState>
      <AlertState>
        <div className='unselectable'>
          <Router>
            <Alerts />
            <Loading />
            <Routes>
              <Route path='/' element={<PrivateRoute component={Home} />} />
              <Route
                path='register'
                element={<PrivateRoute component={Register} />}
              />
              <Route
                path='login'
                element={<PrivateRoute component={Login} />}
              />
              <Route path='*' element={<NoFound />} />
            </Routes>
          </Router>
        </div>
      </AlertState>
    </AuthState>
  );
}

export default App;
