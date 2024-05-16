import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingOverlay = () => {
  return (
    <Overlay>
      <LoaderContainer>
        <Loader />
        <Text>잠시 기다려 주세요.</Text>
      </LoaderContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0%,
  10% { transform: translate(0) rotate(0) }
  35% { transform: translate(calc(var(--s,1)*50%)) rotate(0) }
  66% { transform: translate(calc(var(--s,1)*50%)) rotate(calc(var(--s,1)*180deg)) }
  90%,
  100% { transform: translate(0) rotate(calc(var(--s,1)*180deg)) }
`;

const LoaderContainer = styled.div`
  position: relative;
`;

const Loader = styled.div`
  width: 200px;
  height: 200px;
  aspect-ratio: 1;
  display: grid;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    border-radius: 50%;
    background: #f03355;
    -webkit-mask: repeating-linear-gradient(#000 0 5px, #0000 0 10px);
    animation: ${spin} 1.5s infinite;
  }

  &::after {
    -webkit-mask: repeating-linear-gradient(#0000 0 5px, #000 0 10px);
    --s: -1;
  }
`;

const Text = styled.p`
  position: absolute;
  top: -100px; /* 애니메이션 상단에 위치하도록 조정합니다. */
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  color: #333;
  text-align: center;
`;

export default LoadingOverlay;
