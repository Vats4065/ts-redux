import React from "react";
import "./App.css";
import Home from "./components/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}></Route>

        {/* <Route  path="/login" element={<Login />}></Route>
        <Route  path="/signup" element={<Signup />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
