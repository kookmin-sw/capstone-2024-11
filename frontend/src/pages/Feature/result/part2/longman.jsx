import React from "react";
import styled from "styled-components";

import RoundMan from "../../../../assets/roundman.png";
import RoundTalent1 from "../../../../assets/long1.png";
import RoundTalent2 from "../../../../assets/long2.png";
import RoundTalent3 from "../../../../assets/long3.png";

const Longman = () => {
  return (
    <MainContainer>
      <TopContainer>
        <H3>당신의 얼굴형은 </H3>
        <Title>긴형</Title>
        <H3> 입니다. </H3>
      </TopContainer>

      <MiddleContainer>
        <ImgContainer>
          <GirlImg src={RoundMan} alt="둥근 남자" />
        </ImgContainer>
        <MiddleRightContainer>
          <H4>- 직선형 헤어스타일보다는 곡선형 헤어스타일을 매칭해 주셔야 합니다.</H4>
          <H4>- 직선은 일자로 뻗어나가는 형태라서 얼굴을 오히려 길게 보이게 하기 때문입니다.</H4>
          <H4>- 사이드의 볼륨이 중요하니 투블럭은 피하고 옆머리를 내려주는게 좋아요</H4>
          <H4> - 5대5 가르마는 피하세요!</H4>
          <H4>- 머리색깔은 피부색과 비슷한 색깔로 해주시는 것이 좋아요. 대비감이 강하면 얼굴이 더 길어보여요</H4>
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
export default Longman;
