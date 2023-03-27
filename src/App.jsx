import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoupleTimer from "./CoupleTimer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Results from "./Results";
import About from "./About";

function App() {
  const [firstQuestion, setFirstQuestion] = useState(
    "Want to know how long you've been together?"
  );
  const [secondQuestion, setSecondQuestion] = useState(
    "When did you guys start being together?"
  );

  return (
    <Router>
      <Navbar
        firstQuestion={firstQuestion}
        setFirstQuestion={setFirstQuestion}
        secondQuestion={secondQuestion}
        setSecondQuestion={setSecondQuestion}
      />
      <Navbar2 />
      <div className="relative">
        <Routes>
          <Route
            path="/timeless-love"
            element={
              <div className="flex bg-opacity-30 bg-gray-500 mt-5 rounded-lg shadow-lg">
                <CoupleTimer
                  firstQuestion={firstQuestion}
                  secondQuestion={secondQuestion}
                />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;