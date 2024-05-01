import React from "react";
import styled from "styled-components";
import SpringGirl from "../../../assets/springGirl.png";
const ResultDiv1 = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Title>Personal Color</Title>
        <LeftBottomContainer>
          <GirlImg src={SpringGirl}></GirlImg>
          <PersonalResult>퍼스널 컬러는 봄 입니다. </PersonalResult>
        </LeftBottomContainer>
      </LeftContainer>
      <Line />
      <RightContainer></RightContainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  /* width: 100%; */
  /* background-color: blue; */
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
  font-size: 3.5rem;
  color: #f241b4;
`;
const LeftBottomContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  /* background-color: saddlebrown; */
  width: 100%;
  height: 100%;
`;
const GirlImg = styled.img``;
const PersonalResult = styled.div``;
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
export default ResultDiv1;
