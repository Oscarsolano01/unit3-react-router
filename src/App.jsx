import "./App.css";
import { Routes, Route,} from "react-router-dom";
import Red from "./components/Red.jsx";
import Blue from "./components/Blue.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div id="main-container">
        <NavBar />
        <div id="main-section">
          
          <Routes>
            <Route path="/Blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
