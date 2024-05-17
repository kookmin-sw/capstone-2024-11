import React from "react";
import styled from "styled-components";

import GirlRound from "../../../assets/roundman.png";
import squareTalent1 from "../../../assets/square1.png";
import squareTalent2 from "../../../assets/square2.png";
import squareTalent3 from "../../../assets/square3.png";

const Squareman = () => {
  return (
    <MainContainer>
      <TopContainer>
        <H3>당신의 얼굴형은 </H3>
        <Title>각진형</Title>
        <H3> 입니다. </H3>
      </TopContainer>

      <MiddleContainer>
        <ImgContainer>
          <GirlImg src={GirlRound} alt="각진 남자" />
        </ImgContainer>
        <MiddleRightContainer>
          <H4> - 구렛나루를 기장을 주어서 시선을 아래로 끌어당겨주는게 좋아요</H4>
          <H4> - 웨이브가 효과적인 방법일 수 있어요</H4>
          <H4>
            {" "}
            - 머리를 길러 어느정도 얼굴형을 감싸는 것도 방법입니다. 요즘 유행하는 스타일과 다른것이 문제긴 하지만요
          </H4>
          <H4> - 내린머리보다는 올린머리를 추천해요</H4>
        </MiddleRightContainer>
      </MiddleContainer>

      <BottomContainer>
        <ImgContainer2>
          <GirlImg2 src={squareTalent1} />
          <GirlImg2 src={squareTalent2} />
          <GirlImg2 src={squareTalent3} />
        </ImgContainer2>
      </BottomContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H3 = styled.h3`
  font-size: 1.6rem;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin: 0rem 1.5rem 0rem 1.5rem;
  color: #f241b4;
`;
const MiddleContainer = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
`;
const MiddleRightContainer = styled.div`
  width: 70%;
  padding-right: 4px;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const H4 = styled.h4`
  font-size: 1.5rem;
  margin: 1rem 0 1rem 0;
  font-weight: 500;
`;
const BottomContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgContainer = styled.div`
  width: 30%;
`;
const ImgContainer2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GirlImg = styled.img``;
const GirlImg2 = styled.img`
  margin: 0.5rem 0rem 0.5rem 0rem;
`;
export default Squareman;
