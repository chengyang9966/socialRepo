import React from 'react';
import { useAuth } from '../context/auth/AuthState';
import Spinner from './Spinner';

function Loading() {
  const [authState] = useAuth();
  const { loading } = authState;
  return loading ? <Spinner /> : null;
}

export default Loading;
