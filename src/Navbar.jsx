import React, { useState } from "react";
import logo from '../src/assets/logo.png'
import { Link } from 'react-router-dom';
import NavbarBg from '../src/assets/navbar.jpg'
const Navbar = ({
  firstQuestion,
  setFirstQuestion,
  secondQuestion,
  setSecondQuestion,
}) => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    if (language === "tr") {
      setFirstQuestion("Want to know how long you've been together");
      setSecondQuestion("When did you guys start being together?");
    } else {
      setFirstQuestion("Kaç gündür sevgilisiniz bilmek ister misin?");
      setSecondQuestion("İlişkiniz ne zaman başladı?");
    }
  };

  return (
    <nav className="flex items-center justify-around p-6 border-b-2 border-black lg:flex lg:justify-center"
    style={{ backgroundImage: `url(${NavbarBg})`, backgroundSize: "cover" }}>
    <div className="bg-gray-900 bg-opacity-50 flex items-center justify-center flex-shrink-0 text-pink-500 mr-6 rounded-lg">
  <Link to="/timeless-love" className="flex">
    <img src={logo} alt="Timeless Love" className="w-10 h-10 mr-2" />
    <span className="font-bold text-white text-xl pt-2">Timeless Love</span>
  </Link>
</div>

      <div className="hidden lg:block lg:w-1/2">
        <Link to="/about" className="ml-4 text-lg text-white border-l border-gray-700 pl-4">
          About
        </Link>
      </div>
      <div className="lg:flex lg:items-center lg:w-auto flex">
        <div className="text-sm lg:flex-grow">
          <label htmlFor="language" className="sr-only">
            Select Language
          </label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="bg-gray-800 text-white border border-pink-500 rounded py-2 px-4 focus:outline-none focus:border-pink-300"
          >
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
