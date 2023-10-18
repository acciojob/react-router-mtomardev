
import React from "react";
import './../styles/App.css';
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Navbar from "./Nav";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>}/>
        </Routes>
    </div>
  )
}

export default App
