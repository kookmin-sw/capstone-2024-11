import React from "react";
import styled from "styled-components";

import binarymask from "../../../assets/binary_mask.jpg";
import facenose from "../../../assets/face_nose_img.jpg";
import rgb from "../../../assets/rgb_3d_plot.jpg";
import train from "../../../assets/train_accuracy_by_model.png";
const ResultDiv3 = ({ images }) => {
  console.log(images);
  const prefix = "data:image/jpeg;base64,";
  return (
    <MainContainer>
      <TopContainer>
        <InnerContainer>
          <InnerTopConatiner>
            <H3>binary mask</H3>
          </InnerTopConatiner>
          <InnerBottomContainer>
            <IMG src={prefix + images.origin_img} />
          </InnerBottomContainer>
        </InnerContainer>
        <InnerContainer>
          <InnerTopConatiner>
            <H3>facenose</H3>
          </InnerTopConatiner>
          <InnerBottomContainer>
            <IMG src={prefix + images.binary_mask} />
          </InnerBottomContainer>
        </InnerContainer>
      </TopContainer>

      <BottomContainer>
        <InnerContainer>
          <InnerTopConatiner>
            <H3>RGB</H3>
          </InnerTopConatiner>
          <InnerBottomContainer>
            <IMG src={prefix + images.rgb_3d_plot} />
          </InnerBottomContainer>
        </InnerContainer>
        <InnerContainer>
          <InnerTopConatiner>
            <H3>훈련 모델 성과</H3>
          </InnerTopConatiner>
          <InnerBottomContainer>
            <IMG src={prefix + images.probability} />
          </InnerBottomContainer>
        </InnerContainer>
      </BottomContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
`;
const InnerContainer = styled.div`
  height: 100%;
  width: 50%;
`;
const InnerTopConatiner = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H3 = styled.h3``;
const IMG = styled.img`
  width: 100%;
  height: 90%;
`;
const InnerBottomContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BottomContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
`;

const BottomLeftContainer = styled.div`
  height: 100%;
  width: 50%;
`;

const BottomRightContainer = styled.div`
  height: 100%;
  width: 50%;
`;
export default ResultDiv3;
