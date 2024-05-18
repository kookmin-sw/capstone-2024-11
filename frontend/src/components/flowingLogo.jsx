import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../assets/LogoV2.png";

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const LogosContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 100px;
  position: relative;
  overflow: hidden;
`;

const ImageBox = styled.div`
  display: flex;
  width: calc(277px * 20); /* Adjust according to the number of images times 2 */
  animation: ${slideAnimation} 20s linear infinite; /* Double the animation duration */
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 277px;
  height: 86px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const FlowingLogo = () => {
  return (
    <LogosContainer>
      <ImageBox>
        {Array.from({ length: 20 }).map((_, index) => (
          <ImageWrapper key={index}>
            <Image src={Logo} alt={`logo ${(index % 10) + 1}`} />
          </ImageWrapper>
        ))}
      </ImageBox>
    </LogosContainer>
  );
};

export default FlowingLogo;
