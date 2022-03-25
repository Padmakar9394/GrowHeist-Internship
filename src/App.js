import React, {useState} from "react";
import './App.css';

import FAQ from "./Components/FAQ/faq";
import data from "./Components/FAQ/data";

function App() {
  const [questions,setQuestions] = useState(data);
  return (
    <div className="m-12">
      <h1 className="text-xl font-bold mb-2">FAQ</h1>
      <div>
        {questions.map((question) => {
          return (
            <FAQ key={question.id} {...question} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
