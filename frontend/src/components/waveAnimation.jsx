import React from "react";
import styled, { keyframes } from "styled-components";

const waveAnimation = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
`;

const swellAnimation = keyframes`
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
`;

// Styled-components
const MainContainer = styled.div`
  width: 100%;
  height: 50vh;
`;
const Container = styled.div`
  position: relative;
  height: 100%;
  /* width: 100%; */
  background: radial-gradient(ellipse at center, rgba(255, 254, 234, 1) 0%, rgba(255, 254, 234, 1) 35%, #b7e8eb 100%);
  overflow: hidden;
`;

const Ocean = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #33b0ff;
`;

const Wave = styled.div`
  background: url("/wave2.svg") repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: ${waveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);

  &:nth-of-type(2) {
    top: -175px;
    animation: ${waveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      ${swellAnimation} 7s ease -1.25s infinite;
    opacity: 1;
  }
`;

// React component
const WaveAnimation = () => (
  <MainContainer>
    <Container>
      <Ocean>
        <Wave />
        <Wave />
      </Ocean>
    </Container>
  </MainContainer>
);

export default WaveAnimation;
