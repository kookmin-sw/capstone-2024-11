import React from "react";
import styled from "styled-components";
import AboutTextAni from "./AboutTextAni";
const Section3Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5cccc;
`;
const AboutText = styled.p`
  color: black;
  font-size: 5rem;
  font-weight: 700;
  /* margin-top: 2rem; */
`;
const BottomContainer = styled.div`
  height: auto;
  width: auto;
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
        <AboutTextAni />
      </BottomContainer>
    </Section3Container>
  );
};
export default Section3Main;
