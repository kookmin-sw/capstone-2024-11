import React from "react";
import styled from "styled-components";

import RoundMan from "../../../../assets/GirlRound.png";
import RoundTalent1 from "../../../../assets/long11.png";
import RoundTalent2 from "../../../../assets/long22.png";
import RoundTalent3 from "../../../../assets/long33.png";

const LongGirl = () => {
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
          <H4>
            - 긴 얼굴을 가진 분들은 얼굴을 좀 더 둥글게 보이도록 자연스럽고 부드러운 웨이브를 선택하는 것이 좋아요.
            자연스러운 웨이브가 어울려요.
          </H4>
          <H4>
            - 긴 얼굴형에는 얼굴을 둘러싸는 레이어드 컷이나 머리카락을 어깨 아래까지 자르는 스타일이 어울리며, 이는
            얼굴을 더 감싸고 짧아 보이게 만들어 줄 수 있어요.
          </H4>
          <H4>
            - 긴 얼굴을 가진 분들에게는 앞머리가 도움이 될 수 있어요. 약간의 레이어드가 있는 앞머리나 사이드 브리지
            앞머리는 얼굴을 가로로 보이게 만들어 주어 긴 얼굴을 보다 균형있게 만들어 줄 거예요.
          </H4>
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
export default LongGirl;
