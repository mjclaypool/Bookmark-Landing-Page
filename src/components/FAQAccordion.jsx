import { useState } from "react"

export default function FAQAccordion() {
  const [question, setQuestion] = useState(0);
  const questions = [
    "What is Bookmark?",
    "How can I request a new browser?",
    "Is there a mobile app?",
    "What about other Chromium browsers?",
  ]
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  function handleClick(index) {
    if (index == question) {
      setQuestion(0);
    } else {
      setQuestion(index);
    }
  }

  return (
    <div className="my-12">
      <hr className="hidden lg:block" />
      {questions.map(index => (
        <div key={index}>
          <div className="cursor-pointer py-5" onClick={() => handleClick(index)}>
          <div className="flex justify-between items-center text-start hover:text-soft-red">
            <h3 className="text-md">{index}</h3>
            {question == index ?
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className="stroke-soft-red rotate-180">
                <path fill="none" stroke="current" strokeWidth="3" d="M1 1l8 8 8-8"/>
              </svg>
            :
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className="stroke-soft-blue">
                <path fill="none" stroke="current" strokeWidth="3" d="M1 1l8 8 8-8"/>
              </svg>
            }
          </div>
          {question == index && <p className="text-grey-blue text-base pt-6 pb-4 text-left">{lorem}</p>}
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}