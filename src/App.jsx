import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoupleTimer from "./CoupleTimer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
function App() {
  const [firstQuestion, setFirstQuestion] = useState(
    "Want to know how long you've been together?"
  );
  const [secondQuestion, setSecondQuestion] = useState(
    "When did you guys start being together?"
  );

  return (
    
    <Router>
      <Navbar firstQuestion={firstQuestion} setFirstQuestion={setFirstQuestion} secondQuestion={secondQuestion} setSecondQuestion={setSecondQuestion}/>
      <Navbar2 />
      <Routes>
        <Route
          path="/timeless-love"
          element={
            <div className="flex bg-opacity-50  bg-gray-900 mt-5  rounded-lg shadow-lg">
              <CoupleTimer 
                firstQuestion={firstQuestion}
                secondQuestion={secondQuestion}
              />
            </div>
          }
        />
        <Route
          path="/about"
          element={<div>About Us Page</div>}
        />
      </Routes>
    </Router>
  
  );
}

export default App;
