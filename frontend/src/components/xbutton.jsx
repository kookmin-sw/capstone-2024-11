import React from "react";
import styled from "styled-components";

// Colors
const softorange = "#F4A259";
const tomatored = "#F25C66";

const Container = styled.div`
  position: relative;
  margin: auto;
  /* background-color: white; */
  width: 50px;
  height: 50px;
  /* margin-top: 100px; */
  cursor: pointer;
`;

const LeftRight = styled.div`
  height: 4px;
  width: 50px;
  position: absolute;
  margin-top: 24px;
  background-color: black;
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all 0.3s ease-in;

  ${Container}:hover & {
    transform: rotate(-45deg);
    background-color: #8539e8;
  }
`;

const RightLeft = styled.div`
  height: 4px;
  width: 50px;
  position: absolute;
  margin-top: 24px;
  background-color: black;
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all 0.3s ease-in;

  ${Container}:hover & {
    transform: rotate(45deg);
    background-color: #8539e8;
  }
`;

const Label = styled.label`
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease-in;
  opacity: 0;
  position: absolute;
  margin: 60px 0 0 5px;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const CloseButton = () => {
  return (
    <Container>
      <LeftRight />
      <RightLeft />
      <Label>close</Label>
    </Container>
  );
};

export default CloseButton;
