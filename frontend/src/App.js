import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import LoginSignup from "./component/LoginSignup";
import Newone from "./Newtrips/Newone";
import Madenew from "./Newtrips/Madenew";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<Madenew />} />
        <Route path="/show" element={<Newone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
