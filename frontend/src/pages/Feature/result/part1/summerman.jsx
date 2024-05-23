import React from "react";
import styled from "styled-components";
import Girl from "../../../../assets/GirlRound.png";
import BestMatch from "../../../../assets/BestColor.png";
import SummerMan from "../../../../assets/SummerMan.png";

const Summerman = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Title>Personal Color</Title>
        <LeftBottomContainer>
          <PersonalResult>
            퍼스널 컬러는 <StrongPersonalResult>여름</StrongPersonalResult>
            입니다
          </PersonalResult>
          <GirlImg src={SummerMan}></GirlImg>
          <HashTagContainer>
            <HashTag>#깨끗함</HashTag>
            <HashTag>#부드러움</HashTag>
            <HashTag>#청초함</HashTag>
            <HashTag>#맑은</HashTag>
          </HashTagContainer>
          <img src={BestMatch} />
        </LeftBottomContainer>
      </LeftContainer>
      <RightContainer>
        <HairStyleContainer>
          <Subtitle>#헤어스타일</Subtitle>
          <Detail>
            <Detailtitle>1. 부드러운 이미지의 헤어스타일</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;반듯하고 딱딱한 느낌보다는 살짝 컬이 들어간 부드러운
              느낌의 웨이브가 어울립니다.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;최대한 자연스러움을 잃지 않는 정도의 웨이브 정도로
              펌을 해주시면 좋을 것 같아요.
            </Detailsubtitle>
            <Detailtitle>2. 염색 선택 시 주의사항</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;강한 느낌을 주는 블랙보다는 물이 살짝 빠진 듯 한
              자연스러운 컬러가 잘 어울려요.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;애쉬계열을 탁한 컬러들이 대체적으로 잘 어울리는
              편이며 노란기가 도는 밝은 브라운은 피해주셔야 합니다.
            </Detailsubtitle>
          </Detail>
        </HairStyleContainer>
        <FashonContainer>
          <Subtitle>#패션</Subtitle>
          <Detail>
            <Detailtitle>1. 여름 타입에 어울리는 옷 스타일</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;최대한 비슷한 톤으로 상하의의 대비감이 적게 밝고
              화사한 컬러를 사용하는게 좋아요.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;봄 웜톤과 마찬가지로 밝고 화사한 컬러들이 잘
              어울립니다. 하지만 기억해야 할 것은 선명한 컬러보다 부드러운
              파스텔 톤을 선택해야 합니다.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;얼굴과 가까운 상의의컬러를 최대한 밝게 써주는 것이
              좋아요.
            </Detailsubtitle>
          </Detail>
        </FashonContainer>
        <MakeupContainer>
          <Subtitle>#스타일링 포인트</Subtitle>
          <Detail>
            <Detailtitle>1. 부드럽고 밝은 스타일</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;은은하고 크기가 작은 패턴
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;컬러의 대비감이 최대한 없는 은은한 느낌의
              스트라이프도 잔잔하게 들어가 있는 셔츠가 좋은 선택이 될 수 있어요.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;얼굴이 살아보일 수 있는 최대한 밝은 컬러를
              선택하세요!
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
export default Summerman;
