import React, { useContext, useState } from 'react';
import Input from '../components/input';
import API, { METHODS } from '../utils/api';
import AlertContext from '../context/Alert/alertContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    Username: '',
    Bio: '',
    Email: '',
    Password: '',
    RepeatPassword: ''
  });
  onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const InputArray = [
    {
      name: 'Username',
      type: 'text'
    },
    {
      name: 'Bio',
      type: 'text'
    },
    {
      name: 'Email',
      type: 'email'
    },
    {
      name: 'Password',
      type: 'password'
    },
    {
      name: 'Repeat Password',
      type: 'password'
    }
  ];
  const onSubmit = (e) => {
    e.preventDefault();
    const { Email, Password, Bio, Username, RepeatPassword } = user;
    if (Email === '' || Password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else if (Password !== RepeatPassword) {
      setAlert('Please use the same password', 'danger');
    } else {
      API({
        url: '/api/users',
        method: METHODS.POST,
        data: { email: Email, password: Password, bio: Bio, username: Username }
      }).then((result) => {
        if (result.error) {
          setAlert(result.error, 'danger');
        } else {
          setAlert(result.msg, 'success', () => {
            navigate('/login');
          });
        }
      });
    }
  };
  return (
    <div className='limiter'>
      <div className='container-login100'>
        <div className='wrap-login100' style={{ paddingTop: 57 }}>
          <form
            className='login100-form validate-form'
            style={{ width: '100%' }}
            onSubmit={onSubmit}
          >
            <span class='login100-form-title'>Register</span>
            {InputArray.map((w) => {
              return Input({
                name: w.name,
                placeholder: w.name,
                type: w.type,
                value: user[w.name],
                onchange: onchange
              });
            })}
            <div className='container-login100-form-btn'>
              <button className='login100-form-btn'>Register</button>
            </div>
          </form>
          <div className='container-login100-form-btn'>
            <button
              onClick={() => navigate('/login')}
              className='login100-form-btn btn-primary'
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
