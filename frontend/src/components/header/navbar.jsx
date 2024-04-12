import React from 'react';
import styled from 'styled-components';
import CircleButtonComponent from './menubutton';
import logoimg from '../../assets/logo_purple.png';
const Navbar = () => {

  return (
    <NavbarContainer>
      <Logo src={logoimg}/>
      <CircleButtonComponent/>
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
`;

const Logo = styled.img`
  padding: 10px 20px;
  width: 80px;
  height: 70px; 
`;

export default Navbar;
