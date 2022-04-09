import React from "react";
import Slider from "react-slick";

import {BsClock} from "react-icons/bs";
import {FiChevronsRight} from "react-icons/fi"
import {IoLocationOutline} from "react-icons/io5";

import {PrevArrow, NextArrow} from "./Arrow";

const JobPosting = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
    <h1 className="text-center text-2xl underline underline-offset-4 font-semibold mb-4 my-16">Job Opportunities</h1>
    <div className="px-6 md:bg-bgCol-100 lg:py-8 md:px-8">
    <Slider {...settings}>
        <div className="shadow-lg px-8 py-4 bg-white rounded-lg my-4 border border-gray-500">
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
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2 items-center">
              <BsClock />
              <h2>Full-time, Part-time</h2>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <h2>7.5miles-Bronx,NY 10465</h2>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <h1 className="font-semibold">Skills : </h1>
            <h3>Diploma In Electrical</h3>
          </div>
          <div className="flex justify-between mt-2">
            <span className="bg-indigo-400 hover:bg-indigo-800 px-1 py-1 rounded-full text-white text-xs">Urgently Hiring</span>
            <button className="flex items-center text-bgCol-100 ">
              <h1 className="">Know More </h1>
              <span className="w-6 h-6 font-semibold"><FiChevronsRight className="w-full h-full" /></span>
            </button>
          </div>
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
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2 items-center">
              <BsClock />
              <h2>Full-time, Part-time</h2>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <h2>7.5miles-Bronx,NY 10465</h2>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <h1 className="font-semibold">Skills : </h1>
            <h3 className="truncate">BE Mechanical</h3>
          </div>
          <div className="flex justify-between mt-2">
            <span className="bg-indigo-400 hover:bg-indigo-800 px-1 py-1 rounded-full text-white text-xs">Urgently Hiring</span>
            <button className="flex items-center text-bgCol-100 ">
              <h1 className="">Know More </h1>
              <span className="w-6 h-6 font-semibold"><FiChevronsRight className="w-full h-full" /></span>
            </button>
          </div>
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
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2 items-center">
              <BsClock />
              <h2>Full-time, Part-time</h2>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <h2>7.5miles-Bronx,NY 10465</h2>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <h1 className="font-semibold">Skills : </h1>
            <h3>Diploma In Electrical</h3>
          </div>
          <div className="flex justify-between mt-2">
            <span className="bg-indigo-400 hover:bg-indigo-800 px-1 py-1 rounded-full text-white text-xs">Urgently Hiring</span>
            <button className="flex items-center text-bgCol-100 ">
              <h1 className="">Know More </h1>
              <span className="w-6 h-6 font-semibold"><FiChevronsRight className="w-full h-full" /></span>
            </button>
          </div>
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
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2 items-center">
              <BsClock />
              <h2>Full-time, Part-time</h2>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <h2>7.5miles-Bronx,NY 10465</h2>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <h1 className="font-semibold">Skills : </h1>
            <h3>BE Mechanical</h3>
          </div>
          <div className="flex justify-between mt-2">
            <span className="bg-indigo-400 hover:bg-indigo-800 px-1 py-1 rounded-full text-white text-xs">Urgently Hiring</span>
            <button className="flex items-center text-bgCol-100 ">
              <h1 className="">Know More </h1>
              <span className="w-6 h-6 font-semibold"><FiChevronsRight className="w-full h-full" /></span>
            </button>
          </div>
        </div>

        <div className="shadow-lg px-8 py-4 bg-white rounded-lg my-4 border border-gray-500">
          <div className="flex gap-2">
            <div className="w-12 h-12">
              <img src="https://media.istockphoto.com/vectors/bird-company-logo-vector-template-design-illustration-vector-id1006968540?s=612x612"
                   alt="logo"
                   className="w-full h-full"
                />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Store Employee</h1>
              <h3>7-Eleven</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2 items-center">
              <BsClock />
              <h2>Full-time, Part-time</h2>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <h2>7.5miles-Bronx,NY 10465</h2>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <h1 className="font-semibold">Skills : </h1>
            <h3>Diploma In Electrical</h3>
          </div>
          <div className="flex justify-between mt-2">
            <span className="bg-indigo-400 hover:bg-indigo-800 px-1 py-1 rounded-full text-white text-xs">Urgently Hiring</span>
            <button className="flex items-center text-bgCol-100 ">
              <h1 className="">Know More </h1>
              <span className="w-6 h-6 font-semibold"><FiChevronsRight className="w-full h-full" /></span>
            </button>
          </div>
        </div>

        <div className="shadow-lg px-8 py-4 bg-white rounded-lg my-4 border border-gray-500">
          <div className="flex gap-2">
            <div className="w-12 h-12">
              <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/01/attachment_66776707-e1515509844624.jpg?auto=format&q=60&fit=max&w=930"
                   alt="logo"
                   className="w-full h-full"
                />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">SDE</h1>
              <h3>MYNERGY</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2 items-center">
              <BsClock />
              <h2>Full-time, Part-time</h2>
            </div>
            <div className="flex gap-2 items-center">
              <IoLocationOutline />
              <h2>7.5miles-Bronx,NY 10465</h2>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <h1 className="font-semibold">Skills : </h1>
            <h3>Diploma In Electrical</h3>
          </div>
          <div className="flex justify-between mt-2">
            <span className="bg-indigo-400 hover:bg-indigo-800 px-1 py-1 rounded-full text-white text-xs">Urgently Hiring</span>
            <button className="flex items-center text-bgCol-100 ">
              <h1 className="">Know More </h1>
              <span className="w-6 h-6 font-semibold"><FiChevronsRight className="w-full h-full" /></span>
            </button>
          </div>
        </div>

        </Slider>
      </div>
    </>
  )
};

export default JobPosting;
