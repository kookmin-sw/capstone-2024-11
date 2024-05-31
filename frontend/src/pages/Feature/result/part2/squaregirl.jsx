import React from "react";
import styled from "styled-components";

import GirlRound from "../../../../assets/GirlRound.png";
import squareTalent1 from "../../../../assets/square11.png";
import squareTalent2 from "../../../../assets/square22.png";
import squareTalent3 from "../../../../assets/square33.png";

const Squaregirl = () => {
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
          <H4>- 얼굴의 각진 라인을 부드럽게 만들어 주기 위해서는 자연스럽고 부드러운 웨이브가 좋아요.</H4>
          <H4> - 웨이브가 효과적인 방법일 수 있어요</H4>
          <H4>
            {" "}
            - 머리를 길러 어느정도 얼굴형을 감싸는 것도 방법입니다. 어깨 아래로 오는 정도의 길이나 약간의 레이어드는
            시선을 분산시켜 줄 수 있어요.
          </H4>
          <H4>
            {" "}
            - 앞머리가 있으면 각진 라인을 부드럽게 만들어 줄 수 있어요. 길게 내린 앞머리나 사이드 부분에 머리가 있으면
            좋아요. 하지만 앞머리가 너무 과하면 얼굴을 더 각진 느낌으로 만들 수 있어요.
          </H4>
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
  display: flex;
  justify-content: center;
  align-items: center;
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
export default Squaregirl;
