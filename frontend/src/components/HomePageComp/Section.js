import React from "react";

const Section = () => {
  const cards = [
    {
      icon: "🧡", // Replace this with an actual icon or image URL
      title: "Be a Volunteer",
      description:
        "Use your skills and experience to support our initiatives. Volunteer as a Photographer, Social Media Manager, Graphic Designer, or Fundraiser to help us bring positive change.",
    },
    {
      icon: "🤝", // Replace this with an actual icon or image URL
      title: "Be a Mentor",
      description:
        "Be a guide and source of inspiration for children. Join our mentorship program to help shape the future of young minds by being a friend and a role model.",
    },
    {
      icon: "🌟", // Replace this with an actual icon or image URL
      title: "Support a Child",
      description:
        "Partner with us to provide education, healthcare, and opportunities for children in need. Your support can transform a life through our 'Happy Futures' Program.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-10 bg-white">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col bg-gray-50 border border-gray-200 rounded-lg shadow-lg p-6 max-w-sm w-full sm:w-80 md:w-96 relative"
        >
          <div className="absolute top-4 right-4 text-3xl">{card.icon}</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h2>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Section;
