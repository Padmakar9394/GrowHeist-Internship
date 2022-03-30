import React from "react";

const Home = () => {
  return (
    <>
      <div className="mt-8 lg:mt-24">
        <h1 className="text-2xl text-center font-semibold lg:text-5xl lg:text-left">Millions of jobs for you. Verified by us.</h1>
        <div className="w-full lg:flex lg:items-center gap-3 lg:w-3/4 lg:mx-12 mt-8">
          <div className="w-full lg:flex lg:items-center lg:bg-white lg:shadow-md border border-2">
            <input className="bg-white shadow-md lg:bg-none lg:shadow-none placeholder:text-slate-500 block w-full py-4 pl-9 pr-3 focus:outline-none sm:text-sm"
                   placeholder="Job title, company, or keywords"
                   type="text"
                   name="search"
            />
            <p className="hidden lg:block text-xl font-light text-gray-500">|</p>
            <input className="bg-white shadow-md lg:bg-none lg:shadow-none mt-4 lg:m-0 placeholder:text-slate-500 block w-full py-4 pl-9 pr-3 focus:outline-none sm:text-sm"
                   placeholder="City, state, or zip"
                   type="text"
                   name="search"
            />
          </div>
          <button className="mt-4 lg:m-0 bg-bgCol-100 text-white font-medium rounded px-3 py-4 w-full lg:w-1/4">Search Jobs</button>
        </div>
      </div>
    </>
  )
};

export default Home;
