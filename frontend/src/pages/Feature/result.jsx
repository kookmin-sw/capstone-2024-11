import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResultDiv1 from "./result/resultDiv1";
import ResultDiv2 from "./result/resultDiv2";
import ResultDiv3 from "./result/resultDiv3";
import { useLocation } from "react-router-dom";
import Springman from "./result/part1/springman";
import Summerman from "./result/part1/summerman";
import Fallman from "./result/part1/fallman";
import Winterman from "./result/part1/winterman";
import Spring from "./result/part1/spring";
import Summer from "./result/part1/summer";
import Fall from "./result/part1/fall";
import Winter from "./result/part1/winter";
import Longman from "./result/part2/longman";
import Roundman from "./result/part2/roundman";
import Squareman from "./result/part2/squareman";

const Result = () => {
  const { state } = useLocation();
  const data = state.data;
  const personal_color = data.predictColorRes.xgb;
  const shape = data.predictShapeRes;
  const gender = state.gender;

  const renderFirstSlide = () => {
    if (gender === "male") {
      switch (personal_color) {
        case "봄":
          return <Springman />;

        case "여름":
          return <Summerman />;
        case "가을":
          return <Fallman />;

        case "겨울":
          return <Winterman />;

        default:
          break;
      }
    } else if (gender === "female") {
      switch (personal_color) {
        case "봄":
          return <Spring />;

        case "여름":
          return <Summer />;
        case "가을":
          return <Fall />;

        case "겨울":
          return <Winter />;

        default:
          break;
      }
    }
  };

  const renderSecondSlide = () => {
    if (gender === "male") {
      switch (shape) {
        case "긴 형":
          return <Longman />;

        case "둥근형":
          return <Roundman />;
        case "각진형":
          return <Squareman />;

        default:
          break;
      }
    } else if (gender === "female") {
      switch (shape) {
        case "긴 형":
          return <ResultDiv2 />;

        case "둥근형":
          return <ResultDiv2 />;
        case "각진형":
          return <ResultDiv2 />;

        default:
          break;
      }
    }
  };

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
          {renderFirstSlide()}
          {renderSecondSlide()}
          <ResultDiv3 images={data.images} />
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
  /* overflow- y: scroll; */
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
