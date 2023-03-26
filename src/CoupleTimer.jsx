import React, { useState } from "react";

function CoupleTimer({firstQuestion, secondQuestion}) {
  const [startDate, setStartDate] = useState("");
  const [showTimer, setShowTimer] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [timeTogether, setTimeTogether] = useState("");
  
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setShowDate(false); // reset showDate when start date is changed
  };

  const calculateTimeTogether = () => {
    const start = new Date(startDate);
    const now = new Date();
    const diff = Math.floor(
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    setTimeTogether(`${diff} days`);
    setShowDate(true);
  };

  const handleShowTimer = () => {
    setShowTimer(true);
  };

  return (
        <div className="max-w-lg mx-auto mt-12">
        {!showTimer && (
          <>
            <p className="text-3xl text-center mb-4 sm:mb-8 p-2">
              <span className="typewriter sm:typewriter-none text-purple-600">
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
              <span className="typewriter sm:typewriter-none text-purple-600">
                {secondQuestion}
              </span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center">
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="border border-purple-600 rounded-lg px-4 py-3 mb-4 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                className="bg-pink-600 text-white px-6 py-3 rounded-lg sm:ml-2 hover:bg-pink-700"
                onClick={calculateTimeTogether}
              >
                Show It
              </button>
            </div>
            {showDate && (
              <p className="text-lg text-center mt-8 text-purple-600">
                You have been together for {timeTogether}!
              </p>
            )}
          </>
        )}
      </div>
      
  );
}

export default CoupleTimer;
