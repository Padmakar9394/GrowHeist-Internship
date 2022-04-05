import React from "react";

import {BsClock} from "react-icons/bs";
import {IoLocationOutline} from "react-icons/io5";

const JobPosting = () => {
  return (
    <>
    <h1 className="text-center text-2xl underline underline-offset-4 font-semibold mb-4">Job Hiring</h1>
    <div className="lg:flex lg:px-8 lg:gap-8 lg:bg-bgCol-100 lg:py-8">
        <div className="flex flex-col shadow-lg px-8 gap-6 py-4 bg-white rounded-lg my-4 border border-gray-500">
          <div className="flex gap-2">
            <div className="w-12 h-12">
              <img src="https://growheist.com/assets/images/company/secured.svg"
                   alt="logo"
                   className="w-full h-full"
                />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Store Employee</h1>
              <h3>7-Eleven</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <BsClock />
              <h2>Full-time, Part-time</h2>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <h2>7.5miles-Bronx,NY 10465</h2>
            </div>
          </div>
          <button className="bg-indigo-400 hover:bg-indigo-800 py-1 rounded-full text-white">Urgently Hiring</button>
        </div>

        <div className="flex flex-col shadow-lg px-8 gap-6 py-4 bg-white rounded-lg my-4 border border-gray-500">
          <div className="flex gap-2">
            <div className="w-12 h-12">
              <img src="https://growheist.com/assets/images/company/upto.png"
                   alt="logo"
                   className="w-full h-full"
                />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Store Employee</h1>
              <h3>7-Eleven</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <BsClock />
              <h2>Full-time, Part-time</h2>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <h2>7.5miles-Bronx,NY 10465</h2>
            </div>
          </div>
          <button className="bg-indigo-400 hover:bg-indigo-800 py-1 rounded-full text-white">Urgently Hiring</button>
        </div>

        <div className="flex flex-col shadow-lg px-8 gap-6 py-4 bg-white rounded-lg my-4 border border-gray-500">
          <div className="flex gap-2">
            <div className="w-12 h-12">
              <img src="https://growheist.com/assets/images/company/3i.png"
                   alt="logo"
                   className="w-full h-full"
                />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Store Employee</h1>
              <h3>7-Eleven</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <BsClock />
              <h2>Full-time, Part-time</h2>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <h2>7.5miles-Bronx,NY 10465</h2>
            </div>
          </div>
          <button className="bg-indigo-400 hover:bg-indigo-800 py-1 rounded-full text-white">Urgently Hiring</button>
        </div>

        <div className="flex flex-col shadow-lg px-8 gap-6 py-4 bg-white rounded-lg my-4 border border-gray-500">
          <div className="flex gap-2">
            <div className="w-12 h-12">
              <img src="https://growheist.com/assets/images/company/secured.svg"
                   alt="logo"
                   className="w-full h-full"
                />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Store Employee</h1>
              <h3>7-Eleven</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <BsClock />
              <h2>Full-time, Part-time</h2>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <h2>7.5miles-Bronx,NY 10465</h2>
            </div>
          </div>
          <button className="bg-indigo-400 hover:bg-indigo-800 py-1 rounded-full text-white">Urgently Hiring</button>
        </div>
      </div>
    </>
  )
};

export default JobPosting;
