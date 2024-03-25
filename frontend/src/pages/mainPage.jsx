import React from 'react';
import styled from 'styled-components';
import Section1Main from './section1/section1main';
import Navbar from '../components/header/navbar';
import Section2Main from './section2/section2main';
import Section3Main from './section3/section3main';
const MainPage = () => {

  return (
    <MainContainer>
        <Navbar/>
        <Section1Main/>
        <Section2Main/>
        <Section3Main/>
    </MainContainer>
  );
};
const MainContainer = styled.nav`
    display: flex;
    flex-direction: column;
    height: auto; /* 높이를 내용에 따라 자동으로 조절 */
    width: 100%;
    /* max-height: 100vh; 화면이 너무 커지는 것을 방지하기 위해 최대 높이 설정 */
    overflow-y: auto; /* 내용이 브라우저 창을 넘어가면 수직 스크롤을 생성 */
`;


export default MainPage;
