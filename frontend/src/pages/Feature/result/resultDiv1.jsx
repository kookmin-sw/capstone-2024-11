import React from "react";
import styled from "styled-components";
import SpringGirl from "../../../assets/springGirl.png";
import BestMatch from "../../../assets/BestColor.png";
import WorstMatch from "../../../assets/WorstColor.png";

const ResultDiv1 = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Title>Personal Color</Title>
        <LeftBottomContainer>
          <PersonalResult>퍼스널 컬러는 봄 입니다. </PersonalResult>
          <GirlImg src={SpringGirl}></GirlImg>
          <HashTagContainer>
            <HashTag>#화사한</HashTag>
            <HashTag>#화사한</HashTag>
            <HashTag>#화사한</HashTag>
            <HashTag>#화사한</HashTag>
          </HashTagContainer>
        </LeftBottomContainer>
      </LeftContainer>
      {/* <Line /> */}
      <RightContainer>
        <MatchingColor src={BestMatch} alt="최적" />
        <MatchingColor src={WorstMatch} alt="최악" />
      </RightContainer>
    </MainContainer>
  );
};
const HashTagContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;
const HashTag = styled.div`
  width: auto;
  height: auto;
  font-size: 1.2rem;
  padding: 3px 3px 3px 3px;
  margin: 0px 3px 0px 3px;
  font-weight: 500;
  background-color: wheat;
  border-radius: 20%;
`;
const MainContainer = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  /* width: 100%; */
  background: linear-gradient(
    178.46565850029924deg,
    rgba(176, 216, 245, 1) 2.318840579710145%,
    rgba(255, 255, 255, 1) 95.07246376811594%
  );
`;
const LeftContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: #467359; */
`;
const Title = styled.h2`
  margin: 2rem 0rem 0rem 2rem;
  font-size: 5rem;
  color: #f241b4;
`;
const LeftBottomContainer = styled.div`
  align-items: center;
  /* justify-content: center; */
  display: flex;
  flex-direction: column;
  /* background-color: saddlebrown; */
  width: 100%;
  height: 100%;
`;
const GirlImg = styled.img``;
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
export default ResultDiv1;
