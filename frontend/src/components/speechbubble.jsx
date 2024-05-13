import React from "react";
import styled, { keyframes } from "styled-components";
import IMGSRC from "../assets/speechbubble.png";
const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0); /* 초기 위치 */
  }
  50% {
    transform: translateY(-15px); /* 위로 이동 */
  }
`;

const MovingImage = styled.div`
  height: 100px;
  width: 430px;
  margin-left: 30px;
  background-size: auto;
  background-image: url(${IMGSRC}); /* 이미지 경로 */
  background-size: cover; /* 이미지를 커버하는 크기로 조절 */
  animation: ${moveUpDown} 2s ease-in-out infinite; /* 애니메이션 적용 */
`;

const SpeechBubble = () => {
  return <MovingImage />;
};

export default SpeechBubble;
