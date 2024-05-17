import React from "react";
import styled from "styled-components";
import Girl from "../../../../assets/GirlRound.png";
import BestMatch from "../../../../assets/BestColor.png";

const Winter = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Title>Personal Color</Title>
        <LeftBottomContainer>
          <PersonalResult>
            퍼스널 컬러는 <StrongPersonalResult>봄</StrongPersonalResult>입니다
          </PersonalResult>
          <GirlImg src={Girl}></GirlImg>
          <HashTagContainer>
            <HashTag>#귀여움</HashTag>
            <HashTag>#발랄함</HashTag>
            <HashTag>#여성스러움</HashTag>
            <HashTag>#화사한</HashTag>
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
              • &nbsp;&nbsp;반듯하고 딱딱한 느낌보다는 부드러운 느낌의 웨이브가
              어울립니다.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;중간정도의 S컬이나 C 컬 정도가 봄 타입의
              여성스러움과 귀여움을 잘 나타냅니다.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;앞머리나 애교머리도 웨이브 느낌으로 빠져나오게
              해줘도 좋습니다.
            </Detailsubtitle>
            <Detailtitle>2. 염색 선택 시 주의사항</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;반듯하고 딱딱한 느낌보다는 부드러운 느낌의 웨이브가
              어울립니다.
            </Detailsubtitle>
          </Detail>
        </HairStyleContainer>
        <FashonContainer>
          <Subtitle>#패션</Subtitle>
          <Detail>
            <Detailtitle>1. 봄 타입에 어울리는 옷 스타일</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;봄 특유의 화사하면서도 샤랄라한 느낌이 잘 표현되는
              옷이 잘 어울립니다.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;선이 딱 떨어지는 정장보다는 셔링, 퍼프 디테일이
              가미된 스타일이 봄 타입의 매력을 더 돋보이게 해줍니다.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;빳빳한 소재보다는 니트, 쉬폰 같은 부드러운 소재들이
              좋습니다.
            </Detailsubtitle>
          </Detail>
        </FashonContainer>
        <MakeupContainer>
          <Subtitle>#메이크업</Subtitle>
          <Detail>
            <Detailtitle>1. 은은한 광택이 있는 메이크업 스타일</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;피부표현은 쿠션이나 파운데이션을 사용하여 광택감을
              살려줍니다.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;아이섀도우는 샤이니한 질감의 펄을 사용하여 은은한
              광택을 연출해줍니다.
            </Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;립은 너무 매트한 립보다는 살짝 글로시한 립 제품을
              선택하여 봄 특유의 맑고 깨끗한 느낌을 강조합니다.
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
  /* margin-top: 1rem; */
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
  /* justify-content: center; */
  align-items: center;
  /* width: 100%;
  background: linear-gradient(
    180deg,
    rgba(176, 216, 245, 1) 2.318840579710145%,
    rgba(255, 255, 255, 1) 95.07246376811594%
  ); */
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
  /* margin-bottom: rem; */
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
export default Winter;
