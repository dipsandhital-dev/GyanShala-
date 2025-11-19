import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  const reviews = [
    {
      name: "Nischal Tamang",
      role: "CTO, Nirvix Company",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos porro laudantium fugit ipsa quia a expedita eaque odio ad ipsum repellendus.",
    },
    {
      name: "Alisha Rai",
      role: "Product Manager, TechNova",
      text: "Outstanding service and attention to detail. The team exceeded our expectations and delivered ahead of schedule.",
    },
    {
      name: "Rohan Shrestha",
      role: "Founder, StartUpLabs",
      text: "Highly professional and responsive. Their innovative solutions helped us scale rapidly in a competitive market.",
    },
    {
      name: "Priya Adhikari",
      role: "Marketing Director, Brandify",
      text: "The collaboration was seamless. They understood our vision and executed it with precision and creativity.",
    },
    {
      name: "Bikash Gurung",
      role: "CEO, CloudShift",
      text: "Exceptional quality and support. We’ve seen measurable growth since partnering with them. Highly recommend!",
    },
  ];

  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        What Our Customers Say
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper pb-8"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full flex flex-col justify-between">
              <div className="text-amber-500 flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-5 leading-relaxed text-sm md:text-base">
                {review.text}
              </p>
              <div>
                <h5 className="text-lg font-semibold text-gray-900">
                  {review.name}
                </h5>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
};

export default Review;