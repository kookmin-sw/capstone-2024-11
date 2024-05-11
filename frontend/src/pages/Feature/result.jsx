import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResultDiv1 from "./result/resultDiv1";
import ResultDiv2 from "./result/resultDiv2";
import ResultDiv3 from "./result/resultDiv3";

const Result = () => {
  const Slidersettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MainContainer>
      <ResultContainer className="slider-container">
        <StyledSlider {...Slidersettings}>
          <ResultDiv1></ResultDiv1>
          <ResultDiv2 />
          <ResultDiv3 />
        </StyledSlider>
      </ResultContainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fedcf5;
  height: 100vh; /* 높이를 내용에 따라 자동으로 조절 */
  /* overflow-y: scroll; */
  width: auto;
`;
const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 80%;
  height: 90%;
`;
const StyledSlider = styled(Slider)`
  width: 100%; /* Slider의 크기를 100%로 설정하여 부모 요소인 ResultContainer와 동일하게 만듭니다. */
  height: 100%;
  flex: 1;
`;

export default Result;
