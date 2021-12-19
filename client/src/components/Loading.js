import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';

import Spinner from './Spinner';

function Loading() {
  const { state: auth } = useContext(AuthContext);

  const { loading } = auth;
  return loading ? <Spinner /> : null;
}

export default Loading;
