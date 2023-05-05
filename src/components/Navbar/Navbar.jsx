import React from 'react';
import "./Navbar.style";
import Nav, { Menu, MenuLink} from "../Navbar/Navbar.style";
import useAuthService from '../../common/auth/AuthService';


const Navbar = () => {
  const authService = useAuthService()

  return (
    <Nav>
      <Menu>
        <MenuLink to="home">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="newblog">New Blog</MenuLink>
        <MenuLink to="login" onClick={()=>authService.removeUser()}>Logout</MenuLink>
      </Menu>
        
    </Nav>
  );
};

export default Navbar;