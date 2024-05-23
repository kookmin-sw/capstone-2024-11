import React from "react";
import styled from "styled-components";
import PersonalColorMain from "./personal_color/PesonalColorMain";
import HairStyleMain from "./hair_style/hairstylemain";
import Introduce from "./introduce/introduce";
import FlowingLogo from "../../components/flowingLogo";
import WaveAnimation from "../../components/waveAnimation";
const Section2Container = styled.div`
  width: 100%;
  height: 800vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: #33b0ff;
`;
const Section2Main = () => {
  return (
    <Section2Container>
      <FlowingLogo />
      <div>
        <WaveAnimation />
      </div>
      <Introduce />
      <FlowingLogo />
      <PersonalColorMain />
    </Section2Container>
  );
};
export default Section2Main;
