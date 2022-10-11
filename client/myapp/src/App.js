import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import About from "./pages/About";
import Songs from "./pages/Songs";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/about" element={<About />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
