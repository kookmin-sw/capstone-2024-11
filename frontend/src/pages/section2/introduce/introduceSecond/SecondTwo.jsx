import React from "react";
import styled from "styled-components";

const SecondTwo = () => {
  return (
    <SecondTwoContainer>
      <BlackCircle1 />
      <BlackCircle2 />
      <BlackCircle3 />
      <Board>
        <TitleText>생성형 이미지</TitleText>
        <Text>
          왼쪽 위 사진과 오른쪽 위 <br />
          사진을 합친 사진이 오른쪽 사진이에요
          <br />
          사용자가 사진을 제공하면, <br />
          우리가 사용하는 특별한 컴퓨터 프로그램이 이를 받아들여요.
          <br /> 그리고 그 사진을 가지고 있던 사용자의 얼굴을 보고,
          <br /> 그 얼굴에 어울리는 멋진 헤어스타일과 색깔을 생각해내죠.
          <br /> 그리고 그 아이디어를 사용해서 새로운 사진을 만들어내요. <br />이 작업을 하기 위해서,
          <br /> 우리는 이미 학습된 컴퓨터 모델을 사용하고 있는데요,
          <br />이 모델은 얼굴을 보고 어떤 헤어스타일이 잘 어울릴지를 배웠어요. <br />
          그리고 우리가 사용하는 모델은 사진이 잘 정면을 향하고 있을 때 더 잘 작동하거든요.
          <br /> 그래서 이 모델을 사용해서 새로운 멋진 이미지를 만들어내는 거죠.
        </Text>
      </Board>
    </SecondTwoContainer>
  );
};
const TitleText = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;
const Text = styled.p`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem 16rem 1rem 16rem;
  line-height: 2;
`;
const SecondTwoContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  /* background-color: blue; */
`;
const BlackCircle1 = styled.div`
  width: 14rem;
  height: 14rem;
  position: absolute;
  border-radius: 100%;
  z-index: 2;
  top: 0;
  left: 10%;
  background-color: black;
`;
const BlackCircle2 = styled.div`
  width: 12rem;
  height: 12rem;
  position: absolute;
  border-radius: 100%;
  z-index: 2;
  top: 0;
  right: 10%;
  background-color: black;
`;
const BlackCircle3 = styled.div`
  width: 10rem;
  height: 10rem;
  position: absolute;
  border-radius: 100%;
  z-index: 2;
  top: 24%;
  right: 14%;
  background-color: black;
`;
const Board = styled.div`
  width: 60%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: white; */
`;

export default SecondTwo;
