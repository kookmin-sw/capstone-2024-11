// import React,{useState} from 'react';
// import styled from 'styled-components';

// import logoimg from '../../assets/logo_purple.png';
// import menuimg from '../../assets/menu.svg';
// import menuhoverimg from '../../assets/menu_hover.svg'
// const Navbar = () => {
//     const [isMenuHovered, setIsMenuHovered] = useState(false);

//   return (
//     <NavbarContainer>
//       <Logo src={logoimg}/>
//       <Menu src={isMenuHovered?menuhoverimg:menuimg} onMouseEnter={()=>setIsMenuHovered(true)} onMouseLeave={()=>setIsMenuHovered(false)}/>
//     </NavbarContainer>
//   );
// };

// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: transparent; 
// `;

// const Logo = styled.img`
//   width: auto;
//   height: auto; 
// `;
// const Menu = styled.img`
//   width: auto;
//   height: auto; 
//   transition: all 3s ease-in-out; /* 이미지 변환에 대한 부드러운 애니메이션 설정 */

//   &:hover {
//     cursor: pointer;
//   }
// `;


// const Button = styled.button`
//   margin-left: 10px;
//   padding: 8px 16px;
//   background-color: #333; /* 버튼 배경색 */
//   color: white; /* 버튼 텍스트 색상 */
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: #555; /* 마우스 호버 시 배경색 변경 */
//   }
// `;

// export default Navbar;
import React, { useState } from 'react';
import styled from 'styled-components';
import logoimg from '../../assets/logo_purple.png';
import menuimg from '../../assets/menu.svg';
import menuHoveredImg from '../../assets/menu_hover.svg';

const Navbar = () => {
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  return (
    <NavbarContainer>
      <Logo src={logoimg} />
      <Menu
        src={isMenuHovered ? menuHoveredImg : menuimg}
        onMouseEnter={() => setIsMenuHovered(true)}
        onMouseLeave={() => setIsMenuHovered(false)}
      />
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
  transition: opacity 0.5s ease-in-out; /* 투명도 변화에 대한 애니메이션 설정 */

  &:hover {
    cursor: pointer;
  }

  호버 시에 투명도가 변화하도록 설정
 

  /* 호버 시에 새로운 이미지가 천천히 나타나도록 설정 */
  &:hover::after {
    content: '';
    background-image: url(${menuHoveredImg});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out; /* 투명도 변화에 대한 애니메이션 설정 */
    z-index: -1; /* 기존 이미지 위로 새로운 이미지가 올라오도록 설정 */
  }

  /* 호버 시에 새로운 이미지가 천천히 나타나도록 설정 */
  &:hover::after {
    opacity: 1; /* 호버 시에 새로운 이미지가 천천히 나타나게 합니다. */
  }
`;

export default Navbar;
