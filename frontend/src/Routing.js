// import Navbar from "./components/header/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MainPage from "./pages/mainPage";
import App from "./App";
import Camera from "./pages/Feature/camera";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/result" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
