import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <MainContainer>
      <Title>About</Title>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #33b0ff;
  height: 100vh; /* 높이를 내용에 따라 자동으로 조절 */
  /* overflow-y: scroll; */
  width: auto;
`;
const Title = styled.div`
  width: 100%;
  height: auto;
  font-size: 7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export default About;
