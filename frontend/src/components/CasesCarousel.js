import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import CaseCard from "./CaseCard";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const CaseCarousel = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAdminAuthenticated } = useContext(AuthContext); // Access admin state
  const carouselRef = useRef(null); // Ref to access the carousel container

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API}/api/patients/all`)
      .then((response) => {
        setPatients(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
        setError("Failed to load patients");
        setLoading(false);
      });
  }, []);

  // Function to scroll to the left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll to the right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-container p-6 bg-gray-100 rounded-lg shadow-xl mb-10">
      {isAdminAuthenticated && (
        <div className="flex justify-end mb-4">
          <Link to="/admin/addPatient">
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-200">
              Add Patient
            </button>
          </Link>
        </div>
      )}

      {/* Container for buttons and carousel */}
      <div className="relative">
        {/* Header and buttons */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Save a Life</h2>
          <div className="justify-center space-x-4 hidden md:flex">
            {/* Left Scroll Button */}
            <button
              onClick={scrollLeft}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Scroll Button */}
            <button
              onClick={scrollRight}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Cards */}
        <div className="carousel flex overflow-x-auto pb-4 no-scrollbar flex-nowrap" ref={carouselRef}>
          {loading ? (
            <div className="w-full text-center">Loading...</div>
          ) : error ? (
            <div className="w-full text-center text-red-500">{error}</div>
          ) : Array.isArray(patients) && patients.length > 0 ? (
            patients.map((patient) => (
              <div
                className="flex-shrink-0 w-full sm:w-[90%] md:w-[80%] lg:w-[400px] mx-2 mb-4 px-4"
                key={patient._id}
              >
                <CaseCard patient={patient} />
              </div>
            ))
          ) : (
            <div className="w-full text-center">No patients found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseCarousel;
