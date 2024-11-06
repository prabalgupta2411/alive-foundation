import React, { useEffect, useState } from "react";
import {
  FaQuoteLeft,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
  FaIdBadge,
} from "react-icons/fa";
import "../CSS/QuoteBar.css"; // Assuming you are using CSS for animations

const QuoteBar = () => {
  const quotes = [
    "Your little support means a lot for those who need.",
    "A small contribution can make a big difference.",
    "Together, we can create a better tomorrow.",
    "Be the change you want to see in the world.",
    "Every donation helps someone in need.",
    "Helping one person might not change the world, but it could change the world for one person.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [quotes.length]); // Added quotes.length as a dependency

  const socialLinks = {
    facebook: "https://www.facebook.com/YourNGOPage",
    twitter: "https://twitter.com/YourNGOPage",
    instagram: "https://www.instagram.com/YourNGOPage",
    youtube: "https://www.youtube.com/YourNGOPage",
    linkedin: "https://www.linkedin.com/YourNGOPage",
    pinterest: "https://www.pinterest.com/YourNGOPage",
  };

  return (
    <div className="quote-bar bg-gray-800 text-white flex items-center justify-between p-2 sm:p-3 md:p-4">
      {/* Quote section: Only visible on medium and larger screens */}
      <div className="quote-section items-center hidden md:flex">
        <div className="mr-5 flex items-center">
          <FaIdBadge className="text-white mr-1" size={18} />
          <span className="text-xs">Unique ID: DL/2020/0255163</span>
        </div>
        <FaQuoteLeft className="text-white mr-1" size={18} />
        <span className="quote-text text-sm">{quotes[currentQuote]}</span>
      </div>

      {/* Social Links: Always visible, centered on mobile */}
      <div className="flex space-x-3 justify-center sm:justify-start">
        {Object.entries(socialLinks).map(([key, url]) => {
          const iconMap = {
            facebook: FaFacebookF,
            twitter: FaTwitter,
            instagram: FaInstagram,
            youtube: FaYoutube,
            linkedin: FaLinkedin,
            pinterest: FaPinterest,
          };
          const Icon = iconMap[key];

          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-${key === "facebook" ? "blue-600" : key === "twitter" ? "blue-400" : key === "instagram" ? "pink-600" : key === "youtube" ? "red-600" : key === "linkedin" ? "blue-700" : "red-500"} transition-all duration-300`}
            >
              <Icon className="text-white" size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default QuoteBar;
