/**
 * @see https://github.com/alan2207/bulletproof-react
 */
import 'antd/dist/antd.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="form">form</Link>
      <Outlet />
    </div>
  );
};
