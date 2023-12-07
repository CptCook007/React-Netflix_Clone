import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<></>}></Route>
      </Routes>
    </>
  );
}

export default App;
