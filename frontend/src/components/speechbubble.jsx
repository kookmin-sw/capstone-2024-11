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
  height: 53px;
  width: 260px;

  background-size: auto;
  background-image: url(${IMGSRC});
  background-size: cover;
  animation: ${moveUpDown} 2s ease-in-out infinite; /* 애니메이션 적용 */
`;

const SpeechBubble = () => {
  return <MovingImage />;
};

export default SpeechBubble;
