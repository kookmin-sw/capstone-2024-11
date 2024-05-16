import React from "react";
import styled from "styled-components";
import First from "../../../../assets/plus1.png";
import Second from "../../../../assets/plus2.png";
import Third from "../../../../assets/result.png";

const SecondOne = () => {
  return (
    <SecondOneContainer>
      <BlackCircle />
      <FirstContainer>
        <First1Container>
          <RightContainer>
            <TitleText>퍼스널 컬러</TitleText>
            <Text>
              퍼스널 컬러는 봄, 여름, 가을, 겨울로 분류됩니다. 이는 사용자의 타고난 피부톤에 기반하여 결정됩니다. 이를
              바탕으로 사용자의 퍼스널 컬러를 한 가지로 분류하고, 해당하는 카테고리에 어울리는 색상 팔레트를 제공합니다.
              이를 통해 사용자에게 어떤 화장품, 의류 및 머리 색상이 가장 잘 어울릴지 추천해 줍니다.
            </Text>
          </RightContainer>
        </First1Container>
      </FirstContainer>
      <SecondContainer>
        <Second1Container>
          <LeftContainer>
            <TitleText>얼굴형 검출</TitleText>
            <Text>
              얼굴의 길이 정보와 각도 정보를 추출하기 위해 컴퓨터 비전 기술을 활용하였습니다. 먼저 dlib 라이브러리의
              Landmark 기술을 사용하여 얼굴의 특징점을 검출했습니다. 이를 통해 총 81개의 특징점을 얻었고, 이 중에서는
              얼굴의 테두리 부분을 결정하는 특징점만을 선택하였습니다. 얼굴의 특징점을 기반으로 세로선 1개, 가로선 5개,
              대각선 1개로 구성된 직선 정보를 얻었습니다. 이 정보를 일관되게 처리하기 위해 길이 정보를 정규화하였습니다.
              또한, 각 선분마다 위 아래 선분과의 비율 정보 10가지를 추가하고, 턱과 광대로 이어지는 대각선과 이마와
              턱으로 이어지는 선과의 각도 정보를 역삼각 함수를 이용하여 구했습니다. 이러한 정보들을 벡터화하여 CSV
              파일로 저장하여 학습용 데이터 전처리를 완료했습니다. 전처리된 데이터를 3차원 PCA를 적용하여 SVM, KNN,
              의사결정트리 세 가지 모델에 학습시켜 얼굴의 형태를 긴형, 둥근형, 각진형 등 3가지로 분류할 수 있도록
              하였습니다.
            </Text>
          </LeftContainer>
        </Second1Container>
      </SecondContainer>
      <ThirdContainer>
        <FirstImage src={First} />
        <SecondImage src={Second} />
        <ThirdImage src={Third} />
        <SecondImage />
        <ThirdImage />
      </ThirdContainer>
    </SecondOneContainer>
  );
};

const SecondOneContainer = styled.div`
  height: 260vh;
  width: 100%;
  position: relative;
  display: flex;
`;
const ThirdContainer = styled.div`
  height: 520px;
  width: 100%;
  position: relative;
  left: 0;
  top: 77%;
  z-index: 3;
`;
const FirstImage = styled.img`
  height: 510px;
  width: 400px;
  position: absolute;
  top: 0;
  left: 15%;
`;
const SecondImage = styled.img`
  height: 510px;
  width: 400px;
  position: absolute;
  top: 0;
  left: 50%; /* 이미지의 좌측 모서리를 가운데로 이동 */
  transform: translateX(-50%); /* 이미지를 가운데로 정렬 */
`;
const ThirdImage = styled.img`
  height: 510px;
  width: 400px;
  position: absolute;
  top: 0;
  right: 15%;
`;
const FirstContainer = styled.div`
  height: 90vh;
  width: 100%;
  position: absolute;
  top: 10%;
  left: 0;
`;
const First1Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;
const RightContainer = styled.div`
  height: 90vh;
  width: 70%;
  position: absolute;
  z-index: 1;
  top: 10%;
  right: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const SecondContainer = styled.div`
  height: 90vh;
  width: 100%;
  position: absolute;
  z-index: 2;
  top: 44%;
  left: 0;
`;
const Second1Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  top: 10%;
  left: 0;
`;
const LeftContainer = styled.div`
  height: 90vh;
  width: 70%;
  position: absolute;
  top: 0;
  left: 0;

  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1); /* 그림자 효과 추가 */
`;
const TitleText = styled.p`
  color: black;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;
const Text = styled.p`
  color: black;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem 16rem 1rem 16rem;
`;
const BlackCircle = styled.div`
  width: 25rem;
  height: 25rem;
  position: absolute;
  border-radius: 100%;
  z-index: 2;
  top: 0;
  left: 10%;
  background-color: black;
  display: flex;
  padding: 1rem 1rem 1rem 1rem;
  justify-content: center;
  align-items: center;
`;
export default SecondOne;
