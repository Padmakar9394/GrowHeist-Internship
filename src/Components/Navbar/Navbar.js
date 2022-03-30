import React, {useState} from "react";

import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";

const NavLg = () => {
  return (
    <div className="w-full bg-white shadow px-8">
    <div className="flex justify-between items-center">
      <div className="w-16 h-16">
        <img
          src="https://growheist.com/assets/images/logo-dark.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-2">
      <div className="flex font-medium">
        <h1 className="px-3 py-1 text-bgCol-100 bg-red-50 rounded-lg">Home</h1>
        <h1 className="px-3 py-1 hover:text-bgCol-100 hover:bg-red-50 rounded-lg">Events</h1>
        <h1 className="px-3 py-1 hover:text-bgCol-100 hover:bg-red-50 rounded-lg">About Us</h1>
        <h1 className="px-3 py-1 hover:text-bgCol-100 hover:bg-red-50 rounded-lg">Contact Us</h1>
      </div>
      <p className="text-lg">|</p>
      <div className="flex items-center gap-2">
        <button className="font-medium px-3 py-1 border-4 border-red-100 bg-bgCol-50 hover:border-bgCol-100 rounded-lg">Log In</button>
        <button className="font-medium px-3 py-1 border-4 border-red-100 bg-bgCol-50 hover:border-bgCol-100 rounded-lg">SignUp</button>
      </div>
      </div>
    </div>
    </div>
  )
};

const NavMd = () => {
  return (
    <div className="w-full bg-white shadow px-4">
    <div className="flex justify-between items-center">
      <div className="w-16 h-16">
        <img
          src="https://growheist.com/assets/images/logo-dark.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
        <button className="" >
          <GiHamburgerMenu />
        </button>
    </div>
    </div>
  )
};

const NavSm = () => {
  return (
    <div className="w-full bg-white shadow px-2">
    <div className="flex justify-between items-center">
      <div className="w-16 h-16">
        <img
          src="https://growheist.com/assets/images/logo-dark.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <button className="" >
        <GiHamburgerMenu />
      </button>
    </div>
    </div>
  )
};


const Navbar = () => {
  return(
      <>
      <nav className="">
      <div className="md:hidden">{
        /*Mobile Screen*/
        <NavSm />
      }</div>
      <div className="hidden lg:hidden md:flex">{
        /*Tablet Screen*/
        <NavMd />
      }</div>
      <div className="hidden lg:flex">{
        /*Desktop Screen*/
        <NavLg />
      }</div>
      </nav>
      </>
  )
};

export default Navbar;
