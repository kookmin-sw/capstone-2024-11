import React from "react";
import styled, { keyframes } from "styled-components";

import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import v4 from "../assets/v4.png";
import v5 from "../assets/v5.png";
import v6 from "../assets/v6.png";
const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;
const BlackCircleContainer = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  border-radius: 100%;
  right: 10%;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BlackCircle = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  background-color: black;
`;
const ImageBox = styled.div`
  width: 582px;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  animation: ${slideAnimation} 5s linear infinite;
`;
const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 97px;
  height: 87px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Slider = () => {
  return (
    <BlackCircleContainer>
      <BlackCircle>
        <ImageBox>
          <ImageWrapper>
            <Image src={v2} alt="v2" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={v3} alt="v3" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={v4} alt="v4" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={v5} alt="v5" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={v6} alt="v6" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={v2} alt="v2" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={v3} alt="v3" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={v4} alt="v4" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={v5} alt="v5" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={v6} alt="v6" />
          </ImageWrapper>
        </ImageBox>
      </BlackCircle>
    </BlackCircleContainer>
  );
};

export default Slider;
