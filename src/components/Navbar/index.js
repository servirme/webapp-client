import React from 'react';
import { NavItem, Navbar } from 'react-materialize';

const CustomNavbar = () => {
  return (
    <Navbar brand='logo' right>
      <NavItem href='get-started.html'>Getting started</NavItem>
      <NavItem href='components.html'>Components</NavItem>
    </Navbar>
  );
};

export default CustomNavbar;
