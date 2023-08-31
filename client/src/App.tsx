import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/ProjectPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
