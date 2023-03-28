import React, { useState } from "react";
import logo from "../src/assets/logo.png";
import { Link } from "react-router-dom";
import NavbarBg from "../src/assets/navbar.jpg";

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
    <nav
      className="flex items-center justify-between p-4 lg:p-6 bg-gray-800 text-white"
      style={{ backgroundImage: `url(${NavbarBg})`, backgroundSize: "cover" }}
    >
      <div className="flex items-center">
        <Link to="/timeless-love" className="flex items-center">
          <img src={logo} alt="Timeless Love" className="w-10 h-10 mr-2" />
          <span className="font-bold text-2xl">Timeless Love</span>
        </Link>
      </div>

      <div className="flex items-center">
      <Link
  to="/about"
  className="text-lg rounded-lg p-1 bg-pink-500 lg:text-white lg:bg-transparent lg:p-0 lg:rounded-none"
>
  <span className="hidden lg:inline-block">About</span>
  <svg
    className="inline-block lg:hidden h-6 w-6 fill-current"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
</Link>


        <div className="ml-6">
          <label htmlFor="language" className="sr-only">
            Select Language
          </label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="bg-gray-700 text-white border border-pink-500 rounded py-2 px-4 focus:outline-none focus:border-pink-300"
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
