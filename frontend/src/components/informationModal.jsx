import React, { useState } from "react";
import styled from "styled-components";
import Xbutton from "../assets/StopButton.svg";
import Gobutton from "../assets/GoButton.svg";
import ClickButton2 from "./modalclickButton";
const InformationModal = ({ onClose }) => {
  //   console.log("open!");
  const [gender, setGender] = useState("male");
  const [createImageChecked, setCreateImageChecked] = useState(false);
  const [email, setEmail] = useState("");

  const handleCreateImageChange = () => {
    setCreateImageChecked(!createImageChecked);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    console.log("submit!");
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose} alt="close">
          <img src={Xbutton} />
        </CloseButton>
        <h2>성별</h2>
        <GenderRadioGroup>
          <GenderRadioInput
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          <GenderRadioLabel htmlFor="male">남성</GenderRadioLabel>
          <GenderRadioInput
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          <GenderRadioLabel htmlFor="female">여성</GenderRadioLabel>
        </GenderRadioGroup>
        <br />
        <CreateImageLabel>
          생성형 이미지
          <CreateImageButton checked={createImageChecked} onChange={handleCreateImageChange} />
        </CreateImageLabel>
        <br />
        <label>
          Email:
          <EmailInput value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <ClickButton2 onClick={handleSubmit}>체험하기!</ClickButton2>
      </ModalContent>
    </ModalOverlay>
  );
};
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  height: 60vh;
  width: 40vh;
  background-color: white;
  padding: 20px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: auto;
  height: auto;
  border: none;
`;
const CreateImageLabel = styled.label`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const GenderRadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const GenderRadioInput = styled.input`
  display: none;
  width: 1.5rem;
  height: 1.5rem;
  &:checked + label::before {
    content: "";
    font-size: 1.2rem;
    margin: 3px 3px 3px 4px;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: #9747ff;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    border-color: transparent;
  }
`;

const GenderRadioLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 35px;
  font-size: 1.2rem;

  &::before {
    width: 1.5rem;
    height: 1.5rem;
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #ccc;
  }
`;

const EmailInput = styled.input.attrs({ type: "email" })`
  /* Input 스타일링 */
`;

const CreateImageButton = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #9747ff;
  }
`;

export default InformationModal;
