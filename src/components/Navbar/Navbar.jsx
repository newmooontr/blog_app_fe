import React from 'react';
import "./Navbar.style";
import Nav, { Menu, MenuLink} from "../Navbar/Navbar.style";


const Navbar = () => {
  return (
    <Nav>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="Logout" onClick={()=>sessionStorage.clear()}>Logout</MenuLink>
      </Menu>
        
    </Nav>
  );
};

export default Navbar