import React, {useState} from "react";
import './App.css';


import Faqpage from "./Components/FAQ/faqpage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <Navbar />
    <div className="mx-2 lg:mx-0">
      <Home />
    </div>
    <Footer />
    </>
  )
};

export default App;
