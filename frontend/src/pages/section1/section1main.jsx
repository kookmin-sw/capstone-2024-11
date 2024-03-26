import React from "react";
import styled from "styled-components";
import AnimatedButton from "../../components/animatedButton";
const Section1Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffd166;
`;
const Section1Main = () => {
  return (
    <Section1Container>
      <AnimatedButton />
    </Section1Container>
  );
};
export default Section1Main;
