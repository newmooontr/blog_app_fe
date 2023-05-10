import React, { useEffect, useState } from "react";
import "./Navbar.style";
import Nav, {
  Menu,
  MenuLink,
  MenuAvatar,
  Header,
  MenuLogo,
} from "../Navbar/Navbar.style";
import useAuthService from "../../common/auth/AuthService";
import { FaUserCircle } from "react-icons/fa";
import { GiQueenCrown, GiLogging } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = useAuthService();
  const navigate = useNavigate();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [user, setUser] = useState(auth.getUser());

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  // useEffect(() => {
  //   const storedUser = auth.getUser();

  //   if (storedUser) {
  //     setUser(storedUser);
  //   }
  // }, []);

  const logout = () => {
    auth.removeUser();
    setUser();

    navigate("/home");
  };

  return (
    <Header>
      <Nav>
        <Menu>
          <MenuLogo>
            <GiQueenCrown />
          </MenuLogo>
          <MenuLink to="home">Home</MenuLink>
          <MenuLink to="about">About</MenuLink>
          <MenuLink to="register">Register</MenuLink>
          <MenuLink to="newblog">New Blog</MenuLink>
        </Menu>
      </Nav>

      {user ? (
        <MenuAvatar onClick={toggleUserMenu} type="button">
          <FaUserCircle />
          {showUserMenu && (
            <div>
              <ul>
                <li>Profile</li>
                <li>My Blogs</li>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          )}
        </MenuAvatar>
      ) : (
        <MenuLink to="login"> <FiLogIn/></MenuLink>
      )}
    </Header>
  );
};

export default Navbar;
