import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from './components/Home'
import Jupiter from "./components/Jupiter";
import Sun from "./components/Sun";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Earth from "./components/Earth";
import Mars from "./components/Mars";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import Neptune from "./components/Neptune";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sun" element={<Sun/>}/>
      <Route path="/mercury" element={<Mercury/>}/>
      <Route path="/venus" element={<Venus/>}/>
      <Route path="/earth" element={<Earth/>}/>
      <Route path="/mars" element={<Mars/>}/>
      <Route path="/jupiter" element={<Jupiter/>}/>
      <Route path="/saturn" element={<Saturn/>}/>
      <Route path="/uranus" element={<Uranus/>}/>
      <Route path="/neptune" element={<Neptune/>}/>
    </Routes>
  );
};
