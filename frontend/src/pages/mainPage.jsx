import React from "react";
import styled from "styled-components";
import Section1Main from "./section1/section1main";
import Navbar from "../components/header/navbar";
import Section2Main from "./section2/section2main";
import Section3Main from "./section3/section3main";
const MainPage = () => {
  return (
    <MainContainer>
      {/* <Navbar/> */}
      <Section1Main />
      <Connection />
      <Section2Main />
      <Section3Main />
    </MainContainer>
  );
};
const Connection = styled.nav`
  height: 20rem;
  width: 100%;
  background: linear-gradient(to bottom, #ffd166, #33b0ff);
`;
const MainContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: auto; /* 높이를 내용에 따라 자동으로 조절 */
  width: 100%;
  overflow-y: auto; /* 내용이 브라우저 창을 넘어가면 수직 스크롤을 생성 */
`;

export default MainPage;
