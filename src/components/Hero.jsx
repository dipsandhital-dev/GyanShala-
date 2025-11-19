import React from "react";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div className="px-4 lg:px-24 py-16 lg:py-24 bg-gradient-to-r from-teal-50 to-blue-50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
        {/* Left Side — Content */}
        <div className="md:w-1/2 space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800">
            Buy & Sell Your Books{" "}
            <span className="text-blue-600">for the Best Prices</span>
          </h1>

          <p className="text-lg text-gray-600 md:w-4/5 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos
            laudantium, praesentium dolorum aspernatur vero unde maiores illo,
            quasi amet dolores cum vel blanditiis.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book..."
              aria-label="Search for books"
              className="flex-grow px-5 py-3 rounded-l-md rounded-r-none sm:rounded-l-md sm:rounded-r-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-6 py-3 text-white font-medium rounded-r-md sm:rounded-l-none sm:rounded-r-md transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Search
            </button>
          </div>
        </div>

        {/* Right Side — Visual (Placeholder) */}
        {/* Right Side — Swiper Book Cards Container */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-md h-64 md:h-80">
            <HeroCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
