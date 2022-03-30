import React, {useState} from "react";
import './App.css';


import Faqpage from "./Components/FAQ/faqpage";
import Navbar from "./Components/Navbar/Navbar";

//Pages
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <Navbar />
    <div className="mx-4 lg:mx-36">
      <Home />
    </div>
    </>
  )
};

export default App;
