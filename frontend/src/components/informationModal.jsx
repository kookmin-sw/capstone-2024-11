import React, { useState } from "react";
import styled from "styled-components";
import Xbutton from "../assets/StopButton.svg";
import Gobutton from "../assets/GoButton.svg";
const InformationModal = ({ onClose }) => {
  console.log("open!");
  const [genderChecked, setGenderChecked] = useState(false);
  const [createImageChecked, setCreateImageChecked] = useState(false);
  const [email, setEmail] = useState("");
  const handleGenderChange = () => {
    setGenderChecked(!genderChecked);
  };
  const handleCreateImageChange = () => {
    setCreateImageChecked(!createImageChecked);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={Xbutton} />
        </CloseButton>
        <label>
          Gender:
          <GenderCheckbox checked={genderChecked} onChange={handleGenderChange} />
        </label>
        <br />
        <label>
          Create Image:
          <CreateImageButton checked={createImageChecked} onChange={handleCreateImageChange} />
        </label>
        <br />
        <label>
          Email:
          <EmailInput value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <ModalButton>확인</ModalButton>
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
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  width: auto;
  height: auto;
  border: none;
`;

const GenderCheckbox = styled.input.attrs({ type: "checkbox" })`
  /* Checkbox 스타일링 */
`;

const EmailInput = styled.input.attrs({ type: "email" })`
  /* Input 스타일링 */
`;

const CreateImageButton = styled.input.attrs({ type: "checkbox" })`
  /* Checkbox 스타일링 */
`;

const ModalButton = styled.button`
  /* 버튼 스타일링 */
`;

export default InformationModal;
