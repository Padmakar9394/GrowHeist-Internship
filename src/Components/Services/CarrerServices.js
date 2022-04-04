import React from "react";

const CareerCoaching = () => {
  return (
    <>
      <div className="lg:mx-8 mt-24">
        <h1 className="font-bold text-2xl text-center">Career Coaching Services</h1>
        <h2 className="text-center text-lg mb-6 lg:mb-4">We offer a variety of career services to meet your remote and hybrid job interests.</h2>
        <div className="lg:flex gap-4">
          <div className="flex flex-col shadow-lg justify-between gap-2 mb-4 lg:mb-0">
            <div className="">
              <img src="https://www.flexjobs.com/images/img-advice.jpg"
                   alt="bg"
                   className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-center font-semibold text-lg">Career Advice</h1>
            <ul className="mx-4 marker:text-sky-400" role="list">
              <li>• Answers to top job search questions</li>
              <li>• Browse by selected topics such as resume, career gap, and negotiation</li>
            </ul>
            <button className="px-4 py-2 border-2 border-bgCol-100 items-center hover:text-white hover:bg-bgCol-100">Learn More</button>
          </div>

          <div className="flex flex-col shadow-lg justify-between gap-2 mb-4 lg:mb-0">
            <div className="">
              <img src="https://www.flexjobs.com/images/img-webinars.jpg"
                   alt="bg"
                   className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-center font-semibold text-lg">Webinars & Events</h1>
            <ul className="mx-4 marker:text-sky-400" role="list">
              <li>• New events each week</li>
              <li>• Variety of career topics</li>
              <li>• Access to Career Coaching Q&A’s</li>
            </ul>
            <button className="px-4 py-2 border-2 border-bgCol-100 items-center hover:text-white hover:bg-bgCol-100">Learn More</button>
          </div>

          <div className="flex flex-col shadow-lg justify-between gap-2 mb-4 lg:mb-0">
            <div className="">
              <img src="https://www.flexjobs.com/images/img-mock.jpg"
                   alt="bg"
                   className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-center font-semibold text-lg">1:1 Coaching Services</h1>
            <ul role="list" className="mx-4 marker:text-sky-400">
              <li>• Access to career coaching experts</li>
              <li>• Resume reviews & mock interviews</li>
              <li>• Up to 35% less than other services</li>
            </ul>
            <button className="px-4 py-2 border-2 border-bgCol-100 items-center hover:text-white hover:bg-bgCol-100">Learn More</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default CareerCoaching;
