import React, { useState } from "react";
import Results from "./Results";

function CoupleTimer({ firstQuestion, secondQuestion }) {
  const [startDate, setStartDate] = useState("");
  const [showTimer, setShowTimer] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [timeTogether, setTimeTogether] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setShowDate(false); // reset showDate when start date is changed
    setShowResults(true);
  };

  const calculateTimeTogether = () => {
    const start = new Date(startDate);
    const now = new Date();
    const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    const years = Math.floor(diff / 365);
    const months = Math.floor((diff % 365) / 30);
    const days = diff % 30;

    setTimeTogether({ years, months, days });
    setShowDate(true);
  };

  const handleShowTimer = () => {
    setShowTimer(true);
  };

  const handleClose = () => {
    setShowDate(false);
    setShowTimer(!showTimer);
  };

  const handleNo = () => {
    setShowMessage(true);
  };

  return (
    <div className="max-w-lg  mx-auto mt-5">
      {!showTimer && !showMessage && (
        <>
          <p className="text-3xl text-center mb-4 sm:mb-8 p-2">
            <span className="typewriter sm:typewriter-none text-purple-300">
              {firstQuestion}
            </span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center mb-5">
            <button
              className="bg-pink-600 text-white px-6 py-3 rounded-lg mb-4 sm:mb-0 sm:mr-2 hover:bg-pink-700"
              onClick={handleShowTimer}
            >
              Yes
            </button>
            <button
              className="bg-gray-600 text-white px-6 py-3 rounded-lg sm:ml-2 hover:bg-gray-700"
              onClick={handleNo}
            >
              No
            </button>
          </div>
        </>
      )}
      {showMessage && (
        <>
          <p className="text-3xl flex flex-col text-center mb-4 sm:mb-8 p-2">
            <span className="typewriter sm:typewriter-none text-purple-300">
              Sorry to hear that!
            </span>
          <div className="mt-2">  <button
    type="button"
    class="inline-block rounded bg-neutral-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"  onClick={() => window.location.reload(false)}>
    BACK TO HOME
  </button></div>
          </p>
          <p className="text-xl text-center mb-6">
            We hope you find what you are looking for.
          </p>
        </>
      )}
      {showTimer && (
        <>
          <p className="text-3xl text-center mb-4 sm:mb-8">
            <span className="typewriter sm:typewriter-none text-purple-300">
              {secondQuestion}
            </span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="border-2 border-purple-600 bg-gray-900 text-purple-400 rounded-lg px-4 py-3 mb-4 sm:mb               sm:mr-2 focus:outline-none focus:ring-2 focus:ring-purple-600 "
              />
          
            </div>
          
          </>
        )}
        {showResults && (
          <Results
            startDate={startDate}
            showResults={showResults}
            timeTogether={timeTogether}
            setShowResults={setShowResults}
          />
        )}
      </div>
    );
  }
  
  export default CoupleTimer;
  
