import React,{useState} from 'react';
import styled from 'styled-components';
import CircleButtonComponent from './menubutton';
import logoimg from '../../assets/logo_purple.png';
import menuimg from '../../assets/menu.svg';
import menuhoverimg from '../../assets/menu_hover.svg'
const Navbar = () => {
    const [isMenuHovered, setIsMenuHovered] = useState(false);

  return (
    <NavbarContainer>
      <Logo src={logoimg}/>
      <Menu src={isMenuHovered?menuhoverimg:menuimg} onMouseEnter={()=>setIsMenuHovered(true)} onMouseLeave={()=>setIsMenuHovered(false)}/>
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
const Menu = styled.img`
  width: auto;
  height: auto; 
  transition: all 3s ease-in-out; /* 이미지 변환에 대한 부드러운 애니메이션 설정 */

  &:hover {
    cursor: pointer;
  }
`;


const Button = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #333; /* 버튼 배경색 */
  color: white; /* 버튼 텍스트 색상 */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555; /* 마우스 호버 시 배경색 변경 */
  }
`;

export default Navbar;
