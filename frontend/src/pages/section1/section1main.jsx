// import React from "react";
// import styled, { keyframes } from "styled-components";
// import LOGO from "../../assets/onyou (1).png";
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(-20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;
// const Section1Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #ffd166;
// `;
// const IMG = styled.img`
//   animation: ${fadeIn} 1s ease-in-out forwards;
// `;
// const FirstDiv = styled.div`
//   margin-top: 2rem;
//   animation: ${fadeIn} 1s ease-in-out forwards;
//   animation-delay: 1s;
//   font-size: 4rem;
// `;
// const SecondDiv = styled.div`
//   margin-top: 1rem;
//   font-size: 3.7rem;

//   animation: ${fadeIn} 1s ease-in-out forwards;
//   animation-delay: 2s;
// `;
// const Section1Main = () => {
//   return (
//     <Section1Container>
//       <IMG src={LOGO} />
//       <FirstDiv>오직 당신 만을 위한</FirstDiv>
//       <SecondDiv>개인형 맞춤 솔루션</SecondDiv>
//     </Section1Container>
//   );
// };
// export default Section1Main;

import React from "react";
import styled, { keyframes } from "styled-components";
import LOGO from "../../assets/onyou (1).png";
import PyramidLoaderComponent from "../../components/Pyramid";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section1Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffd166;
`;

const IMG = styled.img`
  opacity: 0; /* 초기 상태를 보이지 않게 설정 */
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0.5s; /* 필요한 경우 약간의 딜레이 추가 */
  animation-fill-mode: both; /* 애니메이션 상태 유지 */
`;

const FirstDiv = styled.div`
  margin-top: 2rem;
  font-size: 4rem;
  opacity: 0; /* 초기 상태를 보이지 않게 설정 */
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 1.5s; /* 딜레이 조정 */
  animation-fill-mode: both; /* 애니메이션 상태 유지 */
`;

const SecondDiv = styled.div`
  margin-top: 1rem;
  font-size: 3.7rem;
  opacity: 0; /* 초기 상태를 보이지 않게 설정 */
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 2.5s; /* 딜레이 조정 */
  animation-fill-mode: both; /* 애니메이션 상태 유지 */
`;

const Section1Main = () => {
  return (
    <Section1Container>
      <IMG src={LOGO} />
      <FirstDiv>오직 당신 만을 위한</FirstDiv>
      <SecondDiv>개인형 맞춤 솔루션</SecondDiv>
      <PyramidLoaderComponent />
    </Section1Container>
  );
};

export default Section1Main;
