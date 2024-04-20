import styled from "styled-components";
import Webcam from "react-webcam";
import CameraBtn from "../../assets/CameraButton.svg";
import { useState } from "react";

function Camera() {
  const [imageSrc, setimageSrc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const CapturePhoto = (getScreenshot) => {
    const imageSrc = getScreenshot();
    setimageSrc(imageSrc);
    openModal();
  };
  return (
    <MainContainer>
      <Webcam
        mirrored={true}
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}>
        {({ getScreenshot }) => (
          <ImageButton src={CameraBtn} alt="Capture" onClick={() => CapturePhoto(getScreenshot)} />
        )}
      </Webcam>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <img src={imageSrc} alt="Captured" />
            <ButtonContainer>
              <button onClick={closeModal}>open</button>
              <button>Send</button>
            </ButtonContainer>
          </ModalContent>
        </Modal>
      )}
    </MainContainer>
  );
}
const MainContainer = styled.div`
  height: auto;
  width: auto;
  background-color: aquamarine;
`;
const Modal = styled.div`
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  button {
    margin: 0 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    font-size: 16px;
  }
`;
const ImageButton = styled.img`
  cursor: pointer;
`;
export default Camera;
