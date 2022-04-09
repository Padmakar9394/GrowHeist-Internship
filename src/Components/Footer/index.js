import React from "react";

import {BsTwitter, BsFacebook, BsYoutube, BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-footer-600 text-white pt-8 mt-64 px-2">
          <div className="md:flex">
          <div className="md:w-1/3 flex gap-5 lg:mx-24">
            <div className="w-16 h-16">
              <img
                src="https://growheist.com/assets/images/logo-dark.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className="md:flex md:flex-col">
              <h1 className="text-2xl font-bold">GrowHeist</h1>
              <h3 className="text-gray-400 mt-2">175 Forest Street,Mumbai</h3>
              <h3 className="text-gray-400">+91 9876543210</h3>
              <h3 className="mt-2">FOLLOW US</h3>
              <div className="flex gap-3 mt-1">
                <span className="w-6 h-6 cursor-pointer"><BsFacebook className="w-full h-full"/></span>
                <span className="w-6 h-6 cursor-pointer"><BsTwitter className="w-full h-full"/></span>
                <span className="w-6 h-6 cursor-pointer"><BsYoutube className="w-full h-full"/></span>
                <span className="w-6 h-6 cursor-pointer"><BsLinkedin className="w-full h-full"/></span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:flex md:justify-between md:mr-24">
            <div className="md:flex md:flex-col md:gap-2 mt-2 md:mt-0">
              <h1 className="text-2xl font-bold">Pages</h1>
              <h3 className="hover:text-orange-300 cursor-pointer">About Us</h3>
              <h3 className="hover:text-orange-300 cursor-pointer">Media & Press</h3>
              <h3 className="hover:text-orange-300 cursor-pointer">Carrer</h3>
              <h3 className="hover:text-orange-300 cursor-pointer">Blog</h3>
            </div>
            <div className="md:flex md:flex-col md:gap-2 mt-2 md:mt-0">
              <h1 className="text-2xl font-bold">Recent Posts</h1>
              <h3 className="hover:text-orange-300 cursor-pointer">Breaking Down Barriers</h3>
              <h3 className="hover:text-orange-300 cursor-pointer">A Celebration of Success</h3>
              <h3 className="hover:text-orange-300 cursor-pointer">A World of Oppurtunities</h3>
            </div>
            <div className="md:flex md:flex-col md:gap-2 mt-2 md:mt-0">
              <h1 className="text-2xl font-bold">Resources</h1>
              <h3 className="hover:text-orange-300 cursor-pointer">Help & Support</h3>
              <h3 className="hover:text-orange-300 cursor-pointer">Privacy Policy</h3>
              <h3 className="hover:text-orange-300 cursor-pointer">Terms & Conditions</h3>
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
