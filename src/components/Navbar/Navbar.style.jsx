import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../globalStyle/FlexStyle";

const Nav = styled(Flex)`
  padding: 1rem 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  justify-content: space-between;
  align-items: center;
`;

export const MenuLogo = styled.div`
margin-top: 10px;
font-size: xx-large;
`;


export const MenuLink = styled(Link)`
  text-align: center;
  font-size: medium;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
  }
`;

export const MenuAvatar = styled(Link)`
 
  text-align: center;
  padding-right: 20px;
  list-style: none;
  margin: 0;
  padding: 0 20px 0 0;
 

  div {
    position: absolute;
    display: block;
    font-size: medium;
    width: 130px;
    height: 100px;
    right: 0px;
    top: 85px;
    background:rgba(255, 255, 255, 0.1);/* Color Theme Swatches in Hex */
    margin: auto;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 3px 3px 20px 10px rgba(0, 0, 0, 0.2);

    ul {
      list-style-type: none;
      line-height: 28px;
     
  

      li {
        &:hover {
          color: ${({ theme }) => theme.colors.mainColor};
          background-color: grey;
          font-weight: bold;
          
        }
      }
    }
  }
`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    overflow: hidden;
  }
`;

export default Nav;
