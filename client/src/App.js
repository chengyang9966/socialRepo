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
import SideMenuState from './context/sideMenu/sideMenuState';

function App() {
  return (
    <AuthState>
      <SideMenuState>
        <AlertState>
          <div className='unselectable'>
            <Router>
              <Alerts />
              <Loading />
              <Routes>
                {PrivateRoute().map(({ path, children }) => {
                  return (
                    <Route
                      key={path}
                      path={path}
                      element={
                        <RequireAuth redirectTo='/login'>
                          {children}
                        </RequireAuth>
                      }
                    />
                  );
                })}

                <Route path='/register' element={<Register />} />

                <Route
                  path='*'
                  element={
                    <RequireAuth redirectTo='/login'>
                      <NoFound />
                    </RequireAuth>
                  }
                />
              </Routes>
            </Router>
          </div>
        </AlertState>
      </SideMenuState>
    </AuthState>
  );
}

export default App;
