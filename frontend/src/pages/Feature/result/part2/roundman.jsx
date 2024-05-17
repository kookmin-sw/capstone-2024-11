import React from "react";
import styled from "styled-components";

import GirlRound from "../../../assets/roundman.png";
import RoundTalent1 from "../../../assets/round1.png";
import RoundTalent2 from "../../../assets/round2.png";
import RoundTalent3 from "../../../assets/round3.png";

const Roundman = () => {
  return (
    <MainContainer>
      <TopContainer>
        <H3>당신의 얼굴형은 </H3>
        <Title>둥근형</Title>
        <H3> 입니다. </H3>
      </TopContainer>

      <MiddleContainer>
        <ImgContainer>
          <GirlImg src={GirlRound} alt="둥근 남자" />
        </ImgContainer>
        <MiddleRightContainer>
          <H4> - 둥근얼굴형의 둥근 형태를 계란형으로 만드는 것이 기본입니다.</H4>
          <H4> - 투블럭이 잘 어울려요. 가로폭을 축소시켜주어서 계란형으로 만듭니다.</H4>
          <H4> - 리젠트펌 같이 앞머리를 세우면 세로길이를 확보할 수 있어요</H4>
          <H4> - 5대5 가르마가 잘 어울려요</H4>
          <H4> - 포마드 머리도 잘 어울려요</H4>
        </MiddleRightContainer>
      </MiddleContainer>

      <BottomContainer>
        <ImgContainer2>
          <GirlImg2 src={RoundTalent1} />
          <GirlImg2 src={RoundTalent2} />
          <GirlImg2 src={RoundTalent3} />
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
export default Roundman;
