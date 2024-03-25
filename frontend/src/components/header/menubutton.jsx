import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'checkbox', id: 'menuicon' })`
  display: none;
`;
const LabelContainer = styled.div`  padding: 10px 20px;
`;

const Label = styled.label.attrs({ htmlFor: 'menuicon' })`
  display: block;
  
  width: 40px;
  height: 30px;
  position: relative;
  z-index: 2;
`;

const Sidebar = styled.div`
  width:300px;
  height:100%;
  background:#222;
  position: fixed;
  top: 0;
  right: ${props => props.isChecked ? '0' : '-300px'};
  z-index: 1;
  transition: all .35s;
`;

const Span = styled.span`
  display: block;
  width: 40px;
  height: 6px;
  border-radius: 30px;
  background-color: #9747FF;
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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <>
      <Sidebar isChecked={isChecked}/>
      <Input checked={isChecked} onChange={handleCheckboxChange}/>
      <LabelContainer>        
        <Label>
        <TopSpan isChecked={isChecked} />
        <MiddleSpan style={{opacity: isChecked ?0:1}}/>
        <BottomSpan isChecked={isChecked}/>
      </Label>  
      </LabelContainer>
          </>
  );
};

export default StyledCheckbox;
