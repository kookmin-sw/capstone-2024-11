import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  100% {
    transform: rotateY(360deg);
  }
`;

const PyramidLoader = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: block;
  transform-style: preserve-3d;
  transform: rotateX(-20deg);
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: ${spin} 4s linear infinite;
`;

const Side = styled.span`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: center top;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;
//봄  #77DD77
//여름 #40E0D0
//가을 #FFBF00
//겨울 #99FFFF
const Side1 = styled(Side)`
  transform: rotateZ(-30deg) rotateY(90deg);
  background: conic-gradient(#77dd77, #40e0d0, #ffbf00, #99ffff);
`;

const Side2 = styled(Side)`
  transform: rotateZ(30deg) rotateY(90deg);
  background: conic-gradient(#99ffff, #ffbf00, #40e0d0, #77dd77);
`;

const Side3 = styled(Side)`
  transform: rotateX(30deg);
  background: conic-gradient(#99ffff, #ffbf00, #40e0d0, #77dd77);
`;

const Side4 = styled(Side)`
  transform: rotateX(-30deg);
  background: conic-gradient(#77dd77, #40e0d0, #ffbf00, #99ffff);
`;

const Shadow = styled.span`
  width: 60px;
  height: 60px;
  background: #77dd77;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotateX(90deg) translateZ(-40px);
  filter: blur(12px);
`;

const PyramidLoaderComponent = () => {
  return (
    <PyramidLoader>
      <Wrapper>
        <Side1 className="side1" />
        <Side2 className="side2" />
        <Side3 className="side3" />
        <Side4 className="side4" />
        <Shadow className="shadow" />
      </Wrapper>
    </PyramidLoader>
  );
};

export default PyramidLoaderComponent;
