import React from "react";
import styled from "styled-components";

import GirlRound from "../../../../assets/GirlRound.png";
import RoundTalent1 from "../../../../assets/round11.png";
import RoundTalent2 from "../../../../assets/round22.png";
import RoundTalent3 from "../../../../assets/round33.png";

const Roundgirl = () => {
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
          <H4>
            {" "}
            - 얼굴이 둥근 형태를 가졌다면 길이 있는 스타일이 어울립니다. 길이 있는 스타일은 얼굴을 세로로 더욱 늘어지게
            만들어 주어 더 날씬한 느낌을 줄 수 있어요.
          </H4>
          <H4>
            {" "}
            - 레이어드 컷은 머리카락 주위에 층을 넣어 얼굴을 감싸는데 도움을 줍니다. 이렇게 하면 얼굴의 둥근 형태를 조금
            더 길어 보이게 할 수 있어요.
          </H4>
          <H4> - 5대5 가르마가 잘 어울려요</H4>
          <H4>
            {" "}
            - 옆으로 넘긴 사이드 파트는 얼굴을 세로로 더욱 길어 보이게 해줍니다. 이렇게 하면 얼굴의 둥근 형태를 조금 더
            뚜렷하게 만들어 줄 수 있어요.
          </H4>
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
export default Roundgirl;
