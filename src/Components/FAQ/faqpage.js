import React, {useState} from "react";

import Navbar from "../Navbar/Navbar";
import FAQ from "./faq";
import data from "./data";

const FaqPage = () => {
  const [questions,setQuestions] = useState(data);
  return (
    <>
      <div className="bg-gray-50">
      <div className="bg-bgCol-100 px-2 py-4 md:mx-16 lg:mx-36 text-white mt-8 lg:mt-48">
        <h1 className="text-xl lg:text-2xl py-4 px-4 lg:px-16">Frequently Asked Questions</h1>
        <p className="px-4 lg:px-16">Here are a few of the questions we get the most. If you don't see what's on your mind, reach out to us anytime on phone, chat, or email.</p>
      </div>
      <div className="px-2">
        <div>
          {questions.map((question) => {
            return (
              <FAQ key={question.id} {...question} />
            )
          })}
        </div>
      </div>
      </div>
    </>
  )
};

export default FaqPage;
