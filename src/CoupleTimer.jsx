import React, { useState } from "react";
import Results from "./Results";
function CoupleTimer({ firstQuestion, secondQuestion }) {
  const [startDate, setStartDate] = useState("");
  const [showTimer, setShowTimer] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [timeTogether, setTimeTogether] = useState("");
  const [showResults,setShowResults] = useState(false)
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setShowDate(false); // reset showDate when start date is changed
    setShowResults(true)
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
  return (
    <div className="max-w-lg mx-auto mt-5">
      {!showTimer && (
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
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg sm:ml-2 hover:bg-gray-700">
              No
            </button>
          </div>
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
    className="border-2 border-purple-600 bg-gray-900 text-purple-400 rounded-lg px-4 py-3 mb-4 sm:mb-10 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-purple-600 "
  />
 
</div>


          {showDate && (
            <div className="fixed z-50 top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-2/3 md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-8">
                <p className="text-2xl text-center mb-6 text-purple-500 font-bold">
                  Congratulations!
                </p>
                <p className="text-xl text-center mb-6">
                  You have been together for{" "}
                  <span className="text-purple-700 font-bold">
                    {timeTogether}
                  </span>
                  !
                </p>
                <div className="flex justify-center">
                  <button
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
     {showResults && (
  <Results startDate={startDate} showResults={showResults} timeTogether={timeTogether} setShowResults={setShowResults} />
)}

    </div>
  );
}

export default CoupleTimer;
