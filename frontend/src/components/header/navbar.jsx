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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent; 
`;

const Logo = styled.img`
  width: auto;
  height: auto; 
`;

export default Navbar;
