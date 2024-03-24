import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'checkbox', id: 'menuicon' })`
  display: none;
`;

const Label = styled.label.attrs({ htmlFor: 'menuicon' })`
  display: block;
  width: 60px;
  height: 40px;
  position: relative;
  background-color: #ccc;
  cursor: pointer;
`;

const Span = styled.span`
  display: block;
  width: 100%;
  height: 5px;
  border-radius: 30px;
  background-color: #000;
  position: absolute;
  transition: transform 0.3s, opacity 0.3s;
  
`;
const TopSpan = styled(Span)`
  top: ${props => props.isChecked ? '50%' : '0'};
  transform: translateY(-50%) ${props => props.isChecked ? 'rotate(45deg)' : 'none'};
`;
const MiddleSpan = styled(Span)`
  top:50%;
  transform: translateY(-50%);
`;
const BottomSpan = styled(Span)`
  bottom: ${props => props.isChecked ? '50%' : '0'};
  transform: translateY(50%) ${props => props.isChecked ? 'rotate(-45deg)' : 'none'};
`;

const StyledCheckbox = () => {
  const [isChecked,setIsChecked] = useState(false);
  const handleCheckboxChange = ()=>{
    setIsChecked(!isChecked);
  }
  return (
    <>
      <Input checked={isChecked} onChange={handleCheckboxChange}/>
      <Label>
        <TopSpan isChecked={isChecked} />
        <MiddleSpan style={{opacity: isChecked ?0:1}}/>
        <BottomSpan isChecked={isChecked}/>
      </Label>
    </>
  );
};

export default StyledCheckbox;
