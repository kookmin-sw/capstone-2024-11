import React from "react";
import styled from "styled-components";
import ClickButton from "../../../components/clickbutton";

const TopContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  /* background-color: green; */
`;
const BottomContainer = styled.div`
  width: 100%;
  height: 75%;
  /* background-color: beige; */
`;
const TopTextContainer = styled.div`
  width: auto;
  margin-left: 2rem;
  height: 100%;
  /* background-color: aliceblue; */
`;

const PinkText = styled.p`
  color: #e547ff;
  font-size: 4.5rem;
  font-weight: 700;
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
  transform: rotate(3deg);

  background-color: black;
`;

const SecondBox = styled(RotatedBox)`
  transform: rotate(5.5deg);

  background-color: #ffcbcb;
`;

const NormalBox = styled.div`
  width: 80vw;
  height: 90vh;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const PersonalColorMain = () => {
  return (
    <Container>
      <FirstBox />
      <SecondBox />
      <NormalBox>
        <TopContainer>
          <TopTextContainer>
            <PinkText>Personal Color & Hair Style</PinkText>
          </TopTextContainer>
        </TopContainer>
        <BottomContainer>
          <ClickButton />
        </BottomContainer>
      </NormalBox>
    </Container>
  );
};
export default PersonalColorMain;
