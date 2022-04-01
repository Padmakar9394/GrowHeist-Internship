import React from "react";

const Figure_Section = () => {
  return (
    <>
      <div className="bg-bgCol-100 my-16 py-8">
        <div className="lg:mx-36">
        <div>
          <h1 className="text-2xl lg:text-4xl text-center font-bold">Some figures that matter</h1>
          <p className="text-sm lg:text-lg text-center font-semibold">Our journey depicted in numbers</p>
        </div>
        <div className="mt-8 ml-16 md:ml-64 lg:ml-0 items-center lg:flex lg:justify-between">
          <div className="relative w-48 h-48 items-center">
            <img src="https://uploads-ssl.webflow.com/6077f96cf4fa19216396daaf/61bcbc29f135aa2546d0c673_Frame%2034.png"
                 alt="Happy-Students"
                 className=""
            />
              <h3 className="absolute font-semibold top-8 left-16 text-3xl">2000+</h3>
              <p className="absolute top-12 left-16 my-4">Members</p>
          </div>
          <div className="relative w-48 h-48 items-center">
            <img src="https://uploads-ssl.webflow.com/6077f96cf4fa19216396daaf/61bcc2abd640fb0a17026bf9_Frame%2035.svg"
                 alt="Happy-Students"
                 className=""
            />
              <h3 className="absolute font-semibold top-8 left-16 text-3xl">10000+</h3>
              <p className="absolute top-12 left-16 my-4">Applications</p>
          </div>
          <div className="relative w-48 h-48 items-center">
            <img src="https://uploads-ssl.webflow.com/6077f96cf4fa19216396daaf/61bcc2acc5845bd35fb3d4eb_Frame%2036.svg"
                 alt="Happy-Students"
                 className=""
            />
              <h3 className="absolute font-semibold top-8 left-16 text-3xl">500+</h3>
              <p className="absolute top-12 left-16 my-4">Job Posted</p>
          </div>
          <div className="relative w-48 h-48 items-center">
            <img src="https://uploads-ssl.webflow.com/6077f96cf4fa19216396daaf/61bcc2abc20dae8569671667_Frame%2037.svg"
                 alt="Happy-Students"
                 className=""
            />
              <h3 className="absolute font-semibold top-8 left-16 text-3xl">200+</h3>
              <p className="absolute top-12 left-16 my-4">Companies</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
};

export default Figure_Section;
