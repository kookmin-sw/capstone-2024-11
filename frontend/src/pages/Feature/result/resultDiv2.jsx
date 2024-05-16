import React from "react";
import styled from "styled-components";

import GirlRound from "../../../assets/GirlRound.png";
import RoundTalent1 from "../../../assets/mina.png";

const ResultDiv2 = () => {
  return (
    <MainContainer>
      <TopContainer>
        <H3>당신의 얼굴형은 </H3>
        <Title>둥근형</Title>
        <H3> 입니다. </H3>
      </TopContainer>

      <MiddleContainer>
        <ImgContainer>
          <GirlImg src={GirlRound} alt="둥근 여자" />
        </ImgContainer>
        <MiddleRightContainer>
          <H4> - 둥근 얼굴형에는 5대5 가르마를 추천 해요!</H4>
          <H4> - 5대5 가르마는 세로로 시선을 잡아줘서 가로가 넓은 둥근 얼굴형에 좋아요</H4>
          <H4> - 긴생머리도 잘 어울려요</H4>
          <H4> - 펌보다 생머리를 좀 더 추천 드리지만 차분한 웨이브 펌도 괜찮습니다</H4>
        </MiddleRightContainer>
      </MiddleContainer>

      <BottomContainer>
        <ImgContainer2>
          <GirlImg2 src={RoundTalent1} />
          <GirlImg2 src={RoundTalent1} />
          <GirlImg2 src={RoundTalent1} />
        </ImgContainer2>
      </BottomContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  /* justify-content: center; */

  /* width: 100%;
  background: linear-gradient(
    180deg,
    rgba(176, 216, 245, 1) 2.318840579710145%,
    rgba(255, 255, 255, 1) 95.07246376811594%
  ); */
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
const PersonalResult = styled.div`
  width: auto;
  height: auto;
  margin-top: 5rem;
  margin-bottom: 3rem;
  font-size: 1.3rem;
  font-weight: 600;
`;
const Line = styled.div`
  width: 4px;
  border-radius: 4px;
  height: 95%;
  /* padding-top: 4px; */
  background-color: black;
`;
const RightContainer = styled.div`
  width: 60%;
  height: 100%;
  /* background-color: blue; */
`;
const MatchingColor = styled.img`
  width: auto;
  height: auto;
`;
export default ResultDiv2;
