import React from "react";
import styled from "styled-components";
import IntroduceFirst from "./introducefirst";
import IntroduceSecond from "./introduceSecond";
const Section2Container = styled.div`
  width: 100%;
  height: auto;
  /* background-color:#8ed1fc ; */
`;
const Introduce = () => {
  return (
    <Section2Container>
      <IntroduceFirst />
      <IntroduceSecond />
    </Section2Container>
  );
};
export default Introduce;
