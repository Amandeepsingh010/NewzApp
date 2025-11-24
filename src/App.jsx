import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import World from "./Pages/World";
import India from "./Pages/India";
import Politics from "./Pages/Politics";
import Sports from "./Pages/Sports";
import Entertainment from "./Pages/Entertainment";
import Business from "./Pages/Business";
import Health from "./Pages/Health";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className="navbar">
        <Navbar />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/world" element={<World />} />
          <Route path="/india" element={<India />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/business" element={<Business />} />
          <Route path="/health" element={<Health />} />
        </Routes>
        
        <div className="footer p-3">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
