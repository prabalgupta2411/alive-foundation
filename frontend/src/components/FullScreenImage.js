import React from "react";

const FullScreenImage = ({ imageSrc, text }) => {
  return (
    <div
      className={`relative flex items-center justify-center w-full h-[30vh] md:h-[70vh] lg:h-[60vh] bg-center bg-cover`}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-white font-bold text-center text-2xl md:text-4xl lg:text-6xl">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default FullScreenImage;
