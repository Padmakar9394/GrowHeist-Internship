import React, { useState } from "react";
import {BsChevronUp, BsChevronDown} from "react-icons/bs";


const FAQ = ({ title, info }) => {
    const [expand,setExpand] = useState(false);
  return (
    <>
    <div className="md:mx-16 lg:mx-36 py-3 bg-white shadow-lg rounded-md my-4 lg:my-8">
    <div className="py-4 flex px-2 text-bgCol-100 justify-between" onClick={() => setExpand(!expand)}>
      <h1 className="font-medium lg:text-xl px-3 lg:px-16 text-bgCol-100">{title}</h1>
      <button className="">
        {expand ? <BsChevronUp /> : <BsChevronDown /> }
      </button>
    </div>
      { expand &&
        <p className="rounded px-3 lg:px-16 py-2">{info}</p>
      }
      </div>
    </>
  )
}

export default FAQ;
