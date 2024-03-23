import React from "react";
import {Typewriter} from "../../Utils/Typewriter";

export const About = () => {
  const render_paragraph = () => (
    <p className="text-lg text-gray-800 dark:text-white">
      <Typewriter text="Welcome to B1, your trusted source for comprehensive cryptocurrency 
      insights. At B1, we are committed to providing you with a cutting-edge
      Cryptocurrency Dashboard that empowers you with real-time and historical
      data of various cryptocurrencies. Our mission is to simplify the
      complexities of the cryptocurrency market and offer you a user-friendly platform." speed={20} />
    </p>
  );

  const render_key_features = () => (
    <div className="my-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Key Features:
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-white">
        <li>
          Real-time Price Tracking: Stay updated with live cryptocurrency prices
          across the market.
        </li>
        <li>
          Daily Changes: Monitor daily fluctuations and trends in the
          cryptocurrency market.
        </li>
        <li>
          Interactive Charts: Explore detailed and interactive charts for
          in-depth analysis.
        </li>
        <li>
          Cryptocurrency Profiles: Dive into comprehensive profiles for a closer
          look at each digital asset.
        </li>
      </ul>
    </div>
  );

  const render_ourteam = () => (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Our Team:
      </h2>
      <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-white">
        <li>Alon</li>
        <li>Itamar</li>
        <li>Tomer</li>
        <li>Nadav</li>
      </ul>
    </div>
  );

  return (
    <div className="container mx-auto p-6 flex flex-wrap items-start">
      <div className="w-full md:w-1/2 p-4">
        {render_paragraph()}
        {render_key_features()}
        {render_ourteam()}
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <img
          src="/CryptoNice.png"
          alt="appLogo"
          className="max-w-xs md:max-w-xl"
        />
      </div>
    </div>
  );
};

export default About;