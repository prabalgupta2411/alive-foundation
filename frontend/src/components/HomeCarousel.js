import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ResponsiveCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // To handle automatic slide changes
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // To go to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // To go to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Add parallax effect based on scroll position
  const handleScroll = () => {
    const parallaxElements = document.querySelectorAll(".parallax");
    parallaxElements.forEach((element) => {
      const speed = element.getAttribute("data-speed");
      const offset = window.scrollY * speed;
      element.style.transform = `translateY(${offset}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Background Parallax Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundPosition: "center",
            }}
          >
            <div
              className="parallax"
              data-speed={0.3} // Adjust the speed of the parallax effect
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4 z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Alive Foundation</h1>
        <p className="text-lg md:text-2xl mb-6">
          Lighting the Path to Hope and Happiness
        </p>
        <Link
          to="/donateNow"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition"
        >
          Donate
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 focus:outline-none hover:bg-black hover:bg-opacity-70 transition z-10"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 focus:outline-none hover:bg-black hover:bg-opacity-70 transition z-10"
        aria-label="Next Slide"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-white"
                : "bg-gray-400 hover:bg-white transition"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
