import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing the arrow up icon

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setVisible(scrollTop > 40);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition duration-150 ease-in-out ${
        visible ? "block" : "hidden"
      }`}
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default ScrollToTopBtn;
