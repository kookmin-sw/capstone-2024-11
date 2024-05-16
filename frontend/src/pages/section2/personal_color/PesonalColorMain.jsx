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
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem 16rem 1rem 16rem;
  line-height: 1.8;
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
              “Only-You”는 컴퓨터 비전과 인공지능 기술을 활용하여 헤어스타일 추천과 퍼스널컬러를 진단하여 주는
              서비스이다. 먼저 카메라를 이용하여 이용자의 정면 얼굴이 나타난 사진을 촬영하면 촬영한 사진을 컴퓨터 비전
              기술을 활용하여 피부 부분을 검출하고 얼굴의 길이 각도 정보를 검출한다. 검출된 피부색 정보를 활용하여
              퍼스널 컬러를 진단한다. 본인의 피부톤이 4가지의 분류 기준중 어디에 해당하는지를 머신러닝 모델을 활용하여
              분류하고 해당 결과값을 활용하여 본인의 피부톤과 조화를 이루는 색 조합에 어떤 것이 있는지 확인 할 수 있다.
              검출된 얼굴 길이 각도 정형이 무엇인지를 확인하고 해당하는 얼굴형과 어울리는 헤어스타일에 어떤 종류가
              있는지 확인 할 수 있다. 마지막으로 생성형 인공지능을 활용하여 입력한 사진 속 얼굴에 본인의 얼굴형과
              어울리는 헤어스타일을 합성하여 본인에게 어울리는 헤어스타일을 적용하였을때 어떤 모습이 나타날지 확인해볼
              수 있는 서비스를 제공한다.
            </Text>
          </BottomContainer>
        </MainContainer>
      </NormalBox>
      <ClickButton />
    </Container>
  );
};
export default PersonalColorMain;
