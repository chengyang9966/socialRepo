import './App.css';
import Login from './pages/login';
import AlertState from './context/Alert/alertState';
import Alerts from './components/Alert';
import NoFound from './pages/NoFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import AuthState from './context/auth/AuthState';
import Loading from './components/Loading';
import RequireAuth from './utils/RequireAuth';
import PrivateRoute from './pages/private';

function App() {
  return (
    <AuthState>
      <AlertState>
        <div className='unselectable'>
          <Router>
            <Alerts />
            <Loading />
            <Routes>
              <Route path='/' element={<Login />} />

              <Route path='/register' element={<Register />} />
              <Route path='/protected'>
                {PrivateRoute().map(({ path, children }) => {
                  return (
                    <Route
                      key={path}
                      path={path}
                      element={
                        <RequireAuth redirectTo='/'>{children}</RequireAuth>
                      }
                    />
                  );
                })}
              </Route>

              <Route path='*' element={<NoFound />} />
            </Routes>
          </Router>
        </div>
      </AlertState>
    </AuthState>
  );
}

export default App;
