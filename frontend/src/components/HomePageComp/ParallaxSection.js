import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-cover bg-center"
      style={{
        backgroundAttachment: window.innerWidth >= 768 ? "fixed" : "scroll", // Enable parallax on desktop only
        backgroundImage: "url('assets/cp18.jpg')", // Replace with your image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-lg text-white">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              SAVE LIVES
            </h1>
            {/* Divider */}
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#3b6572] mb-6"></div>
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
              Welcome to the Alive Foundation, where every action we take is dedicated to saving and improving the lives of the vulnerable. Our mission is to provide immediate and effective support to individuals and communities in crisis due to natural disasters, conflicts, and poverty. Through a combination of emergency relief, rehabilitation, and sustainable development projects, we aim to not only save lives but also rebuild them with dignity and hope.
            </p>
            {/* Donate Button */}
            <Link
              to="/donateNow"
              className="transition-transform transform hover:scale-105 px-6 py-3 bg-[#6a8f9a] hover:bg-[#3b6572] text-white text-sm sm:text-base md:text-lg font-medium rounded-lg"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
