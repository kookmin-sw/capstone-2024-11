import React from "react";
import styled from "styled-components";
import ClickButton from "../../../components/clickbutton";
import SpeechBubble from "../../../components/speechbubble";

const TopContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  /* background-color: green; */
`;

const TopTextContainer = styled.div`
  width: auto;
  margin-left: 2rem;
  height: 100%;
  /* background-color: aliceblue; */
`;

const PinkText = styled.p`
  color: #e547ff;
  font-size: 4rem;
  font-weight: 700;
  margin: 0 0 0 2rem;
`;
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
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
`;
const BottomContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  /* background-color: beige; */
`;
const PersonalColorMain = () => {
  return (
    <Container>
      <FirstBox />
      <SecondBox />
      <NormalBox>
        <MainContainer>
          <TopContainer>
            <TopTextContainer>
              <SpeechBubble />
              <PinkText>Function</PinkText>
            </TopTextContainer>
          </TopContainer>
          <BottomContainer>
            <ClickButton />
          </BottomContainer>
        </MainContainer>
      </NormalBox>
    </Container>
  );
};
export default PersonalColorMain;
