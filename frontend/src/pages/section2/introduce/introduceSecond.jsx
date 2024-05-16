import React from "react";
import styled from "styled-components";
import SecondOne from "./introduceSecond/SecondOne";
import SecondTwo from "./introduceSecond/SecondTwo";
// 이미지와 대략적인 설명
const IntroduceSecond = () => {
  return (
    <IntroduceSecondContainer>
      <SecondOne />
      <SecondTwo />
    </IntroduceSecondContainer>
  );
};
const IntroduceSecondContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export default IntroduceSecond;
