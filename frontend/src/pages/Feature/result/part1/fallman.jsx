import React from "react";
import styled from "styled-components";
import BestMatch from "../../../../assets/FallBest.png";
import FallMan from "../../../../assets/FallMan.png";

const Fallman = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Title>Personal Color</Title>
        <LeftBottomContainer>
          <PersonalResult>
            퍼스널 컬러는 <StrongPersonalResult>가을</StrongPersonalResult>
            입니다
          </PersonalResult>
          <GirlImg src={FallMan}></GirlImg>
          <HashTagContainer>
            <HashTag>#차분함</HashTag>
            <HashTag>#진중함</HashTag>
            <HashTag>#무게감 있는</HashTag>
            <HashTag>#따뜻한</HashTag>
          </HashTagContainer>
          <img src={BestMatch} />
        </LeftBottomContainer>
      </LeftContainer>
      {/* <Line /> */}
      <RightContainer>
        <HairStyleContainer>
          <Subtitle>#헤어스타일</Subtitle>
          <Detail>
            <Detailtitle>1. 부드러운 웨이브가 가미된 헤어스타일</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;반듯하고 딱딱한 느낌보다는 부드러운 느낌의 웨이브가 어울립니다.
            </Detailsubtitle>
            <Detailsubtitle>• &nbsp;&nbsp;컬이 풀어진듯 자연스러운 컬이 어울려요</Detailsubtitle>
            <Detailtitle>2. 염색 선택 시 주의사항</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp; 노란기가 들어간 탁한 브라운 컬러들로 선택을 해주시는게 좋아요.
            </Detailsubtitle>

            <Detailsubtitle>
              • &nbsp;&nbsp; 어울리는 색으로는 다크브라운, 초코브라운, 너무 밝지 않은 레드 브라운도 괜찮은 컬러입니다.
            </Detailsubtitle>
          </Detail>
        </HairStyleContainer>
        <FashonContainer>
          <Subtitle>#패션</Subtitle>
          <Detail>
            <Detailtitle>1. 가을 타입에 어울리는 옷 스타일</Detailtitle>
            <Detailsubtitle>• &nbsp;&nbsp;탁한 컬러들이 어울려요</Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;와인, 브라운, 카키컬러처럼 좀 칙칙하다 싶은 컬러들이 가을 웜톤이 가진 매력을 더 살려줍니다.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;상하의의 대비감이 느껴지지 않도록 부드럽게 그라데이션 되는 느낌의 컬러로 매치해주시는 것이
              좋아요.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp; 깔끔하게 직선으로 딱떨어지는 수트보다는 약간 부드러운 곡선이 가미된 자켓이 더 잘 어울려요.
            </Detailsubtitle>
          </Detail>
        </FashonContainer>
        <MakeupContainer>
          <Subtitle>#스타일링 포인트</Subtitle>
          <Detail>
            <Detailtitle>전체적으로 부드러운 스타일</Detailtitle>
            <Detailsubtitle>• &nbsp;&nbsp;탁한컬러를 사용할 것</Detailsubtitle>
            <Detailsubtitle>• &nbsp;&nbsp;소재는 니트, 마, 린넨처럼 매트한 소재</Detailsubtitle>
            <Detailsubtitle>• &nbsp;&nbsp;부드러운 곡선 아이템</Detailsubtitle>
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
  margin-top: 0.5rem;
`;
const Detailtitle = styled.div`
  padding: 1rem 1rem 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  /* margin-top: 1rem; */
`;
const Detailsubtitle = styled.div`
  padding: 0px 2rem 0px 2rem;
  margin: 0.5rem 0 3px 0;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
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
  /* background-color: #467359; */
`;
const Title = styled.h2`
  margin: 2rem 0rem 0rem 2rem;
  font-size: 4rem;
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
  display: flex;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 1rem;
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
  /* background-color: blue; */
`;
const MatchingColor = styled.img`
  width: auto;
  height: auto;
`;
export default Fallman;
