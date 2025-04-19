import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

const WrappedLogin = () => (
  <BrowserRouter>
    <Login />
  </BrowserRouter>
);

export default WrappedLogin;

// Only run the bootstrap in development mode for standalone usage
if (process.env.NODE_ENV === 'development') {
  import('./bootstrap');
}
