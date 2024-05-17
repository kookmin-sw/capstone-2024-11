import React from "react";
import styled from "styled-components";
import Girl from "../../../assets/GirlRound.png";
import BestMatch from "../../../assets/BestColor.png";

const Winterman = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Title>Personal Color</Title>
        <LeftBottomContainer>
          <PersonalResult>
            퍼스널 컬러는 <StrongPersonalResult>겨울</StrongPersonalResult>입니다
          </PersonalResult>
          <GirlImg src={Girl}></GirlImg>
          <HashTagContainer>
            <HashTag>#세련됨</HashTag>
            <HashTag>#도시적인</HashTag>
            <HashTag>#차가운</HashTag>
            <HashTag>#심플한</HashTag>
          </HashTagContainer>
          <img src={BestMatch} />
        </LeftBottomContainer>
      </LeftContainer>
      <RightContainer>
        <HairStyleContainer>
          <Subtitle>#헤어스타일</Subtitle>
          <Detail>
            <Detailtitle>1. 깔끔하고 직선적인 헤어스타일</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp; 왁스와 같은 스타일링 제품을 사용해서 반듯한 느낌으로 고정해주세요
            </Detailsubtitle>
            <Detailtitle>2. 염색 선택 시 주의사항</Detailtitle>
            <Detailsubtitle>• &nbsp;&nbsp;노란기가 도는 따뜻한 브라운 컬러는 피하시는게 좋아요.</Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;검정색이 가장 잘 어울리니 헤어컬러도 최대한 어둡게 유지하는 걸 추천해요.
            </Detailsubtitle>
          </Detail>
        </HairStyleContainer>
        <FashonContainer>
          <Subtitle>#패션</Subtitle>
          <Detail>
            <Detailtitle>1. 겨울 타입에 어울리는 옷 스타일</Detailtitle>
            <Detailsubtitle>• &nbsp;&nbsp;최대한 어두운 색이 많이 보이게 스타일링하세요.</Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;올블랙을 멋지게 소화할 것 같아요. 상하의 전부다 어두운 색이 많이 보이도록 코디를 하는게
              좋아요
            </Detailsubtitle>
          </Detail>
        </FashonContainer>
        <MakeupContainer>
          <Subtitle>#스타일링 포인트</Subtitle>
          <Detail>
            <Detailtitle>1. 시크한 이미지의 스타일</Detailtitle>
            <Detailsubtitle>• &nbsp;&nbsp;크기가 큰 패턴</Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;화사한 색으로 포인트를 주고 싶다면 이너를 쨍한 컬러로 선택하는 것도 좋은 방법이에요.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;밝응ㄴ 컬러를 입고 싶다면 밝은 그레이 컬러를 활용하는 것도 좋은 방법이에요
            </Detailsubtitle>
          </Detail>
        </MakeupContainer>
      </RightContainer>
    </MainContainer>
  );
};
const HairStyleContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: auto;
`;
const FashonContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 3rem;
`;
const MakeupContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 3rem;
`;
const Subtitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ef9a9a;
`;
const Detail = styled.div`
  padding: 0px 2rem 0px 2rem;
  margin-top: 1rem;
`;
const Detailtitle = styled.div`
  padding: 0px 0rem 0px 0rem;
  font-size: 1.2rem;
  font-weight: 500;
`;
const Detailsubtitle = styled.div`
  padding: 0px 2rem 0px 2rem;
  margin: 3px 0 3px 0;
  font-size: 1.1rem;
  font-weight: 400;
`;
const HashTagContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 2rem;
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
  align-items: center;
`;
const LeftContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;

  background: linear-gradient(
    180deg,
    rgba(176, 216, 245, 1) 2.318840579710145%,
    rgba(255, 255, 255, 1) 95.07246376811594%
  );
`;
const Title = styled.h2`
  margin: 2rem 0rem 0rem 2rem;
  font-size: 4rem;
  color: #f241b4;
`;
const LeftBottomContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const GirlImg = styled.img``;
const PersonalResult = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 5rem;
  font-size: 1.3rem;
  font-weight: 600;
`;
const StrongPersonalResult = styled.h2`
  margin: 0 7px 0 7px;
  color: #ef9a9a;
`;
const RightContainer = styled.div`
  width: 60%;
  height: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
`;
export default Winterman;
