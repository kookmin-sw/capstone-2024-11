import styled from "styled-components";
import Webcam from "react-webcam";
import CameraBtn from "../../assets/CameraButton.svg";
import GoButton from "../../assets/GoButton.svg";
import StopButton from "../../assets/StopButton.svg";
import { useState } from "react";
import axios from "axios";
import LoadingOverlay from "./loding";

function Camera() {
  const [imageSrc, setimageSrc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const videoConstraints = {
    width: 1000,
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
  const sendDataToServer = () => {
    setIsLoading(true);
    axios
      .post("your_server_endpoint", {
        image: imageSrc,
        gender: "",
        email: "",
      })
      .then((response) => {
        setIsLoading(false);
        // Handle response
      })
      .catch((error) => {
        setIsLoading(false);
        // Handle error
      });
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
          <>
            <ImageButton src={CameraBtn} alt="Capture" onClick={() => CapturePhoto(getScreenshot)} />
            <FaceRectangle />
          </>
        )}
      </Webcam>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            {/* <img src={imageSrc} alt="Captured" /> */}
            <CaptureImage src={imageSrc} alt="captured" />
            <ButtonContainer>
              <Button onClick={closeModal}>
                <img src={StopButton}></img>
              </Button>
              <Button onClick={sendDataToServer}>
                <img src={GoButton}></img>
              </Button>
            </ButtonContainer>
          </ModalContent>
        </Modal>
      )}
      {isLoading && <LoadingOverlay />}
    </MainContainer>
  );
}
const MainContainer = styled.div`
  height: 100vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fefae0;
`;
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div`
  background-color: white;
  display: inline-block;
  height: 80vh;
  padding: 40px;
  border-radius: 8px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const Button = styled.button`
  margin: 0 5px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;
const CaptureImage = styled.img`
  width: auto;
  height: 90%;
`;
const ImageButton = styled.img`
  margin-top: 40px;
  height: auto;
  width: auto;
  cursor: pointer;
`;
const FaceRectangle = styled.div`
  position: absolute;
  top: 200px;
  left: calc(50% - 200px); /* 화면 중앙에 위치하도록 설정 */
  width: 400px;
  height: 400px;
  border: 2px solid #ff0000;
`;
export default Camera;
