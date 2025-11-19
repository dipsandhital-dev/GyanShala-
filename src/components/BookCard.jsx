import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const BookCard = ({ headline, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-8">
        {headline}
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {books.map((book) => (
          <SwiperSlide key={book._id}>
            <Link to={`/single_book/${book._id}`} className="block h-full">
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                {/* 👇 Added `relative` here to contain the absolute-positioned cart icon */}
                <div className="flex-shrink-0 relative">
                  <img
                    src={book.imageURL}
                    alt={book.title || "Book cover"}
                    className="w-full h-64 object-cover rounded-md"
                  />

                  <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded-full cursor-pointer transition-colors duration-200">
                    <ShoppingCart size={20} className="text-white" />
                  </div>
                </div>

                <div className="mt-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[3rem]">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      by <span className="font-medium">{book.authorName}</span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-lg font-bold text-green-600">
                      ${book.price?.toFixed(2) || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookCard;