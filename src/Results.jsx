import React from "react";
import "./Results.css"; // import CSS file
import animeGirl from "../src/assets/anime-girl.png"; // import image
import {
        FacebookShareButton,
        PinterestShareButton,
        TwitterShareButton,
        WhatsappShareButton,
        FacebookIcon,
        PinterestIcon,
        TwitterIcon,
        WhatsappIcon,
      } from "react-share";
function Results({ startDate, timeTogether, showResults, setShowResults }) {
  const start = new Date(startDate);
  const now = new Date();
  const diffTime = Math.abs(now - start);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
  const diffMinutes = Math.floor((diffTime / (1000 * 60)) % 60);
  const diffSeconds = Math.floor((diffTime / 1000) % 60);

  const pluralize = (count, singular, plural = `${singular}s`) =>
    `${count} ${count === 1 ? singular : plural}`;

  const timeTogetherMessage = [
    diffDays && pluralize(diffDays, "day"),
    diffHours && pluralize(diffHours, "hour"),
    diffMinutes && pluralize(diffMinutes, "minute"),
    diffSeconds && pluralize(diffSeconds, "second"),
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className={`results-container  ${showResults ? "show" : ""}`}>
     
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:mr-8 mb-8 md:mb-0">
          <img
            src={animeGirl}
            alt="Anime girl"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-pink-500 shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold rounded-lg text-pink-300 mb-2 shadow-lg">
  {timeTogetherMessage}
</h2>
          <p className="text-lg font-medium bg-blue-100 p-3 rounded-3xl bg-opacity-30 text-black">
            You've been together since{" "}
            <span className="text-purple-900 font-semibold">
              {new Date(startDate).toLocaleDateString()}
            </span>
          </p>
          <p className="text-sm text-black mt-4">
            Congratulations on your love journey!
          </p>
          <h5 className="px-4 py-2 rounded-full mt-8  font-semibold tracking-wide bg-gradient-to-r from-pink-500 to-purple-500 opacity-50  hover:from-pink-600 hover:to-purple-600 transition-colors duration-300">
  Share your love story
  <span className="bg-white ml-2 p-1 rounded-full">
   
  </span>
</h5>
<div className="w-full flex justify-around mt-3 mb-3">
  <TwitterShareButton
    title={`We've been together for ${timeTogetherMessage}!`}
    url="https://eren-eroglu.github.io/timeless-love/"
  >
    <TwitterIcon size={40} round />
  </TwitterShareButton>
  <FacebookShareButton
    quote={`We've been together for ${timeTogetherMessage}!`}
    url="https://eren-eroglu.github.io/timeless-love/"
  >
    <FacebookIcon size={40} round />
  </FacebookShareButton>
  <WhatsappShareButton
    title={`We've been together for ${timeTogetherMessage}!`}
    url="https://eren-eroglu.github.io/timeless-love/"
    separator=":: "
  >
    <WhatsappIcon size={40} round />
  </WhatsappShareButton>
</div>

    

        </div>
      </div>
    </div>
  );
}

export default Results;
