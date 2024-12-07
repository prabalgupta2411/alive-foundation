import React from "react";
import "./marquee.scss";

const Marquee = ({ reviews }) => {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
        <p className="text-gray-600 mt-2">Read testimonials from our valued customers</p>
      </div>

      {/* Marquee container */}
      <div className="marquee-container relative w-full overflow-hidden py-4">
        {/* Marquee wrapper */}
        <div className="marquee flex whitespace-nowrap">
          {/* Duplicate the items for a seamless loop */}
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="marquee-item flex items-center bg-white shadow-md rounded-lg p-4 min-w-[300px] md:min-w-[400px] space-x-4 mx-14"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={review.image}
                  alt={review.name}
                  className="item-image w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
              </div>

              {/* Review Details */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
