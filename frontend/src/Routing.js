import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Camera from "./pages/Feature/camera";
import Navbar from "./components/header/navbar";
import Result from "./pages/Feature/result";
import About from "./pages/about/about";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/result" element={<Result />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
