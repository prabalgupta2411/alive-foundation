import React from "react";
import "./style.scss";

const ServicesSection = () => {
  return (
    <section className="min-h-screen bg-[#f8ffff] text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-[#6a8f9a] text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
        what we're offering
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-[#6a8f9a] ml-3 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
      <h1 className="text-[#215c6e] text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
        Services We Provide to Support Life
      </h1>
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        <div className="card bg-white p-10 relative shadow-lg">
          <div className="circle"></div>
          <div className="relative lg:pr-52">
            <h2 className="capitalize text-gray-800 mb-4 text-2xl xl:text-3xl">
              Health & <br /> Medical Assistance
            </h2>
            <p className="text-gray-600">
              We provide health and medical support to underprivileged individuals and families in need. Our services include free check-ups, consultations, and medical treatments.
            </p>
          </div>
          <div className="icon"></div>
        </div>
        <div className="card bg-white p-10 relative shadow-lg">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h2 className="capitalize text-gray-800 mb-4 text-2xl xl:text-3xl">
              Education & <br /> Scholarships
            </h2>
            <p className="text-gray-600">
              We offer educational support to children and youth in need, including scholarships, school supplies, and access to learning resources.
            </p>
          </div>
        </div>
        <div className="card bg-white p-10 relative shadow-lg">
          <div className="circle"></div>
          <div className="relative lg:pr-44">
            <h2 className="capitalize text-gray-800 mb-4 text-2xl xl:text-3xl">
              Food & <br /> Nutrition Assistance
            </h2>
            <p className="text-gray-600">
              We provide food and nutrition assistance to families and communities in need, ensuring that they have access to essential food items for survival.
            </p>
          </div>
        </div>
        <div className="card bg-white p-10 relative shadow-lg">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h2 className="capitalize text-gray-800 mb-4 text-2xl xl:text-3xl">
              Volunteer <br /> Opportunities
            </h2>
            <p className="text-gray-600">
              We engage individuals in meaningful volunteer opportunities, allowing them to contribute to our mission and help those in need through various initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
