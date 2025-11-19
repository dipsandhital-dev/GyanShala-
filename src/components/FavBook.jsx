import React from "react";
import { Link } from "react-router-dom"; 
import favbook from '../assets/favbook.png';

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20">
      {/* Main Content: Image + Text */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
        <div className="md:w-1/2">
          <img 
            src={favbook} 
            alt="Favorite book collection" 
            className="rounded-lg w-full max-w-md mx-auto md:mx-0" 
          />
        </div>

        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Find Your Favorite <span className="text-blue-700">Book Here!</span>
          </h1>
          <p className="text-lg md:w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt
            commodi, quis debitis culpa similique. Ex iste dolore ducimus, debitis
            odio facilis minima? Nihil a tempora ratione quisquam perspiciatis magni.
          </p>

           {/* CTA Button */}
      <div className="flex justify-center">
        <Link to="/shop">
          <button className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Explore More
          </button>
        </Link>
      </div>
      
        </div>

        
      </div>
     
      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row justify-around gap-8 md:gap-12 py-8 px-4 bg-gray-50 rounded-xl mb-12">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold">800+</h3>
          <p className="text-base text-gray-600 mt-2">Booking Listings</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold">500+</h3>
          <p className="text-base text-gray-600 mt-2">Registered Users</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold">1800+</h3>
          <p className="text-base text-gray-600 mt-2">PDF Downloads</p>
        </div>
      </div>

     
    </div>
  );
};

export default FavBook;