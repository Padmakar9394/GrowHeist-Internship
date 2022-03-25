import React, { useState } from "react";
import {BsChevronUp, BsChevronDown} from "react-icons/bs";


const FAQ = ({ title, info }) => {
    const [expand,setExpand] = useState(false);
  return (
    <>
    <div className="w-1/3 px-2 py-3 bg-red-300 shadow-md rounded-md my-2">
    <div className="py-2 flex justify-between">
      <h1 className="font-medium">{title}</h1>
      <button className="" onClick={() => setExpand(!expand)}>
        {expand ? <BsChevronUp /> : <BsChevronDown /> }
      </button>
    </div>
      { expand &&
        <p className="bg-gray-100 rounded p-2">{info}</p>
      }
      </div>
    </>
  )
}

export default FAQ;
