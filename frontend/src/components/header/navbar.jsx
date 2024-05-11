import React from "react";
import styled from "styled-components";
import CircleButtonComponent from "./menubutton";
import logoimg from "../../assets/logo_purple.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="/">
        <Logo src={logoimg} />
      </NavLink>
      <CircleButtonComponent />
    </NavbarContainer>
  );
};
const NavbarContainer = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 30px; */
  background-color: transparent;
  z-index: 100;
`;

const Logo = styled.img`
  padding: 10px 20px;
  width: 80px;
  height: 70px;
`;

export default Navbar;
