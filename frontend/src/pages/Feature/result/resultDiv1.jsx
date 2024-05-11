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
            <HashTag>#귀여움</HashTag>
            <HashTag>#발랄함</HashTag>
            <HashTag>#여성스러움</HashTag>
            <HashTag>#화사한</HashTag>
          </HashTagContainer>
        </LeftBottomContainer>
      </LeftContainer>
      {/* <Line /> */}
      <RightContainer>
        <HairStyleContainer>
          <Subtitle>#헤어스타일</Subtitle>
          <Detail>
            반듯하고 딱딱한 느낌보다는 부드러운 느낌의 웨이브가 가미된 헤어스타일이 더 잘 어울립니다. 중간정도의 S컬이나
            C 컬 정도가 봄 타입의 여성스러움과 귀여움을 잘 나타나게 해줍니다. 앞머리나 애교머리도 웨이브 느낌으로 빠져
            나오게 해줘도 잘 어울립니다. 염색을 한다면 초코브라운, 밝은 브라운처럼 자연스러우면서도 약간 밝은 컬러까지
            무난하게 소화하는데 애쉬컬러와 같은 뿌연 컬러, 푸른기가 도는 블루블랙은 꼭 피해주셔야합니다. ​
          </Detail>
        </HairStyleContainer>
        <FashonContainer>
          <Subtitle>#패션</Subtitle>
          <Detail>
            봄 특유의 화사하면서도 샤랄라한 느낌이 잘 표현되는 옷들이 잘 어울립니다. 선이 딱 떨어지는 정장보다는 셔링,
            퍼프 디테일이 가미된 스타일이 봄 타입의 매력을 더 돋보이게 해줍니다. 빳빳한 소재보다는 니트, 쉬폰 같은
            부드러운 소재들이 좋습니다. ​
          </Detail>
        </FashonContainer>
        <MakeupContainer>
          <Subtitle>#메이크업</Subtitle>
          <Detail>
            피부표현, 아이섀도우, 립 등은 은은한 광택이 있게 메이크업을 해주는 것이 좋아요. 피부는 쿠션이나 파운데이션의
            광택감이 살아있게 해주고, 섀도우도도 샤이니한 질감이 느껴지는 펄을 사용하면 좋습니다. 립도 너무 매트립보다는
            살짝 글로시한 립이 봄 특유의 맑고 깨끗한 느낌을 더 잘 나타내 줘요.
          </Detail>
        </MakeupContainer>
        {/* <MatchingColor src={BestMatch} alt="최적" /> */}
        {/* <MatchingColor src={WorstMatch} alt="최악" /> */}
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
`;
const Detail = styled.div`
  padding: 0px 2rem 0px 2rem;
  margin-top: 1rem;
`;
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
