/** @format */

import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavUser,
  NavUserIcon,
  NavCartIcon,
} from "./NavbarElements";

import UserIcon from "../../images/user.png";
import CartIcon from "../../images/cart.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">andypham</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="products">Products</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
          </NavBtn>
          {/* <NavBtn>
            <NavCartIcon src={CartIcon}></NavCartIcon>
            <NavUserIcon src={UserIcon}></NavUserIcon>
          </NavBtn> */}
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
