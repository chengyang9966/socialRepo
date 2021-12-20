import React, { useState, useContext } from 'react';
import Input from '../components/input';
import API, { METHODS } from '../utils/api';
import AlertContext from '../context/Alert/alertContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import setAuthToken from '../utils/setAuthToken';

import Tilt from 'react-parallax-tilt';

const Login = () => {
  const navigate = useNavigate();

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    Email: '',
    Password: ''
  });

  onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const InputArray = [
    {
      name: 'Email',
      type: 'email'
    },
    {
      name: 'Password',
      type: 'password'
    }
  ];
  const onSubmit = (e) => {
    e.preventDefault();
    const { Email, Password } = user;
    if (Email === '' || Password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      API({
        url: '/api/login',
        method: METHODS.POST,
        data: { email: Email, password: Password }
      }).then((result) => {
        if (result.error) {
          setAlert(result.error, 'danger');
        } else {
          setAuthToken(result.token);
          localStorage.setItem('userId', result.id);
          setAlert(result.msg, 'success', () => {
            navigate('/home');
          });
        }
      });
    }
  };
  return (
    <div className='limiter'>
      <div className='container-login100'>
        <div className='wrap-login100'>
          <Tilt>
            <div className='login100-pic js-tilt' data-tilt>
              <img
                src={process.env.PUBLIC_URL + '/login.webp'}
                alt='login IMG'
              />
            </div>
          </Tilt>

          <form className='login100-form validate-form' onSubmit={onSubmit}>
            <span className='login100-form-title'>Member Login</span>
            {InputArray.map((w, i) => {
              return (
                <Input
                  key={`${w}${i}`}
                  name={w.name}
                  placeholder={w.name}
                  type={w.type}
                  value={user[w.name]}
                  onchange={onchange}
                />
              );
            })}
            <div className='container-login100-form-btn'>
              <button className='login100-form-btn'>Login</button>
            </div>
            <div className='text-center p-t-12'>
              <span className='txt1'>Forgot </span>
              <a className='txt2' href='#'>
                Username / Password?
              </a>
            </div>

            <div className='text-center p-t-136'>
              <a className='txt2' href='/register'>
                Create your Account
                <FontAwesomeIcon
                  aria-hidden='true'
                  icon={faLongArrowAltRight}
                  className='m-l-5'
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
