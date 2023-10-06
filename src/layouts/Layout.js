import React from 'react';
import { Menu } from '../components/commons/Menu';

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
};

export default Layout;
