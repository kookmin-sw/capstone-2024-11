import React from "react";
import styled from "styled-components";
import PersonalColorMain from "./personal_color/PesonalColorMain";
import HairStyleMain from "./hair_style/hairstylemain";
const Section2Container = styled.div`
  width: 100%;
  height: 2000px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: #8ed1fc;
`;
const Section2Main = () => {
  return (
    <Section2Container>
      <PersonalColorMain />
      <HairStyleMain />
    </Section2Container>
  );
};
export default Section2Main;
