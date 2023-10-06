import React from 'react';
import { Menu } from '../components/commons/Menu';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
    <Menu />
    <Container>
      <main>{children}</main>
    </Container>
    </>
  );
};

export default Layout;
