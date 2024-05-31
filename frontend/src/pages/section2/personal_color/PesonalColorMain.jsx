import React from "react";
import styled from "styled-components";
import ClickButton from "../../../components/clickbutton";
import SpeechBubble from "../../../components/speechbubble";
import Try from "../../../assets/tryit.png";

const TopContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  /* background-color: green; */
`;
const Tryit = styled.img``;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const RotatedBox = styled.div`
  position: absolute;
  top: 5%;
  left: 9.5%;
  width: 81vw;
  height: 90vh;
  transition: transform 0.3s ease;
`;

const FirstBox = styled(RotatedBox)`
  transform: rotate(-5.52deg);

  background-color: black;
`;

const SecondBox = styled(RotatedBox)`
  transform: rotate(0deg);

  background-color: #ffcbcb;
`;

const NormalBox = styled.div`
  width: 80vw;
  height: 90vh;
  background-color: white;
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(5.5deg);
  z-index: 1;
`;
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  transform: rotate(-5.5deg);
  padding: 2rem 2rem 2rem 2rem;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
`;
const BottomContainer = styled.div`
  width: auto;
  height: 75%;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 0 7rem 15rem 7rem;
  /* background-color: beige; */
`;
const Text = styled.p`
  color: black;
  font-size: 1.2rem;
  text-align: center;
  word-break: keep-all;
  margin-top: 5rem;
  padding: 1rem 16rem 1rem 16rem;
  line-height: 1.9;
`;
const PersonalColorMain = () => {
  return (
    <Container>
      <FirstBox />
      <SecondBox />
      <NormalBox>
        <MainContainer>
          <TopContainer>
            <SpeechBubble />
            <Tryit src={Try} />
          </TopContainer>
          <BottomContainer>
            <Text>
              "Only-You"는 헤어스타일 추천과 퍼스널 컬러 진단을 위해 컴퓨터 비전과 인공지능 기술을 활용한 서비스입니다.
              먼저, 이용자의 정면 얼굴을 카메라로 촬영하면 컴퓨터 비전 기술을 이용해 얼굴의 길이와 각도 정보를
              분석합니다. 이를 통해 얼굴형을 파악하고, 어울리는 헤어스타일을 추천합니다. 또한, 피부 색상을 분석하여
              개인의 퍼스널 컬러를 진단합니다. 머신러닝 모델을 활용하여 피부톤을 분류하고, 이를 기반으로 어울리는 색
              조합을 제시합니다. 마지막으로, 생성형 인공지능을 활용하여 입력한 사진에 이용자의 얼굴형과 어울리는
              헤어스타일을 합성하여 보여줍니다. 이를 통해 어울리는 헤어스타일을 시뮬레이션해볼 수 있는 서비스를
              제공합니다.
            </Text>
          </BottomContainer>
        </MainContainer>
      </NormalBox>
      <ClickButton />
    </Container>
  );
};
export default PersonalColorMain;
