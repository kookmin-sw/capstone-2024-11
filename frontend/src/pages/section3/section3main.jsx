import React from "react";
import styled from "styled-components";
const Section3Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5cccc;
`;
const AboutText = styled.p`
  color: black;
  font-size: 5rem;
  font-weight: 700;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameText = styled.div`
  color: black;
  font-size: 2rem;
  font-weight: 600;
  padding-top: 1rem;
`;
const Section3Main = () => {
  return (
    <Section3Container>
      <AboutText>About us</AboutText>
      <BottomContainer>
        <NameText>소프트웨어학부 20191660 전병우</NameText>
        <NameText>소프트웨어학부 20191660 전병우</NameText>
        <NameText>소프트웨어학부 20191660 전병우</NameText>
        <NameText>소프트웨어학부 20191660 전병우</NameText>
      </BottomContainer>
    </Section3Container>
  );
};
export default Section3Main;
