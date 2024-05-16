import React from "react";
import styled from "styled-components";
const Feature = () => {
  return (
    <MainContainer>
      <Section1Main />
      <Section2Main />
      <Section3Main />
    </MainContainer>
  );
};
const MainContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: auto; /* 높이를 내용에 따라 자동으로 조절 */
  width: 100%;
  overflow-y: auto; /* 내용이 브라우저 창을 넘어가면 수직 스크롤을 생성 */
`;

export default Feature;
