import React from "react";
import styled from "styled-components";
import Girl from "../../../assets/GirlRound.png";
import BestMatch from "../../../assets/BestColor.png";
const Springman = () => {
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
            <HashTag>#헤맑음</HashTag>
            <HashTag>#따뜻함</HashTag>
            <HashTag>#부드러움</HashTag>
            <HashTag>#다정한</HashTag>
            <HashTag>#생기있는</HashTag>
          </HashTagContainer>
          <img src={BestMatch} />
        </LeftBottomContainer>
      </LeftContainer>
      <RightContainer>
        <HairStyleContainer>
          <Subtitle>#헤어스타일</Subtitle>
          <Detail>
            <Detailtitle>1. 자연스럽고 부드러운 헤어스타일</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp; 봄 웜톤의 남자는 깔끔하고 딱 떨어지는 헤어스타일보다 봄타입 특유의 부드러움을 어필할 수
              있는 약간의 컬이 들어가면 좋아요
            </Detailsubtitle>
            <Detailsubtitle>• &nbsp;&nbsp;중간정도의 S컬이나 C 컬 정도가 좋아요.</Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;컬이 작거나 부스스한 느낌의 펌은 어울리지 않기 때문에 피하는 것도 고려해 보세요.
            </Detailsubtitle>
            <Detailtitle>2. 염색 선택 시 주의사항</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;다크브라운 부터 레드브라운까지 브라운 계열의 컬러가 잘 어울립니다.
            </Detailsubtitle>
            <Detailsubtitle>• &nbsp;&nbsp;추천하지 않는 컬러로는 블루블랙이나, 애쉬톤의 컬러입니다.</Detailsubtitle>
          </Detail>
        </HairStyleContainer>
        <FashonContainer>
          <Subtitle>#패션</Subtitle>
          <Detail>
            <Detailtitle>1. 봄 타입에 어울리는 옷 스타일</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;깔끔한 선 느낌의 셔츠, 심플한 정장이 잘 어울려요. 면티와 깔끔한 자켓도 아주 좋은 조합이에요
            </Detailsubtitle>
            <Detailsubtitle>• &nbsp;&nbsp; 선명하고 쨍한 컬러가 하나쯤은 들어가주면 좋아요.</Detailsubtitle>

            <Detailsubtitle>
              • &nbsp;&nbsp; 하의나 자켓을 무채색으로 입더라도 이너는 블루나, 옐로우, 레드와 같은 화사한 컬러로 입는게
              좋아요.
            </Detailsubtitle>
          </Detail>
        </FashonContainer>
        <MakeupContainer>
          <Subtitle>#스타일링 포인트</Subtitle>
          <Detail>
            <Detailtitle>1. 부드럽고 따뜻한 스타일</Detailtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;상하의, 이너 아우터 중 한 가지는 밝고 화사한 컬러를 매치 할 것
            </Detailsubtitle>
            <Detailsubtitle>• &nbsp;&nbsp;컬러의 대비감을 확실히 줄 것</Detailsubtitle>
            <Detailsubtitle>
              • &nbsp;&nbsp;잔잔하고 은은한 패턴보다 크기가 있고 확실한 느낌의 패턴이 더 어울림
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
const MatchingColor = styled.img`
  width: auto;
  height: auto;
`;
export default Springman;
