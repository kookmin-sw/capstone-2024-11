import React from "react";
import styled from "styled-components";
const Result = () => {
  return (
    <MainContainer>
      <ResultContainer></ResultContainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2d750;
  height: 100vh; /* 높이를 내용에 따라 자동으로 조절 */
  overflow-y: scroll;
  width: auto;
`;
const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 90%;
  height: 80%;
`;

export default Result;
