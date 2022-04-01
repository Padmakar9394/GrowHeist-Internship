import React from "react";

import {BsTwitter, BsFacebook, BsYoutube, BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-footer-600 text-white pt-8 mt-64 px-2">
          <div className="lg:flex">
          <div className="lg:w-1/3 lg:flex lg:flex-col gap-2 lg:mx-24">
            <h1 className="text-2xl font-bold">GrowHeist</h1>
            <p>We will provide wide range of services to enhance your skills, expand your knowledge and have fun.</p>
          </div>
          <div className="lg:w-2/3 lg:flex lg:justify-between lg:mr-24">
            <div className="lg:flex lg:flex-col lg:gap-2 mt-2 lg:mt-0">
              <h1 className="text-2xl font-bold">Pages</h1>
              <h3 className="hover:text-orange-300">About Us</h3>
              <h3 className="hover:text-orange-300">Media & Press</h3>
              <h3 className="hover:text-orange-300">Carrer</h3>
              <h3 className="hover:text-orange-300">Blog</h3>
            </div>
            <div className="lg:flex lg:flex-col lg:gap-2 mt-2 lg:mt-0">
              <h1 className="text-2xl font-bold">Resources</h1>
              <h3 className="hover:text-orange-300">Help & Support</h3>
              <h3 className="hover:text-orange-300">Privacy Policy</h3>
              <h3 className="hover:text-orange-300">Terms & Conditions</h3>
            </div>
          </div>
          </div>
          <div className="bg-gray-900 text-center mt-8 py-4">
            <h1>2022 © Growheist. Design By GrowHeist</h1>
          </div>
      </div>
    </>
  )
};

export default Footer;
