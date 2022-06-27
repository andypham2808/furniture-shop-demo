/** @format */

import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import UserIcon from "../../images/user.png";
import CartIcon from "../../images/cart.png";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="products" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            Product
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign up
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
