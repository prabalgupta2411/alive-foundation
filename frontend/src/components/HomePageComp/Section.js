import React from "react";

const Section = () => {
  const cards = [
    {
      icon: "/assets/donation.png", // Replace this with an actual icon or image URL
      title: "Be a Volunteer",
      description:
        "Use your skills and experience to support our initiatives. Volunteer as a Photographer, Social Media Manager, Graphic Designer, or Fundraiser to help us bring positive change.",
    },
    {
      icon: "/assets/consulting.png", // Replace this with an actual icon or image URL
      title: "Be a Mentor",
      description:
        "Be a guide and source of inspiration for children. Join our mentorship program to help shape the future of young minds by being a friend and a role model.",
    },
    {
      icon: "/assets/maternity.png", // Replace this with an actual icon or image URL
      title: "Support a Child",
      description:
        "Partner with us to provide education, healthcare, and opportunities for children in need. Your support can transform a life through our 'Happy Futures' Program.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-10 bg-[#f8ffff]">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col bg-[#54818f] border border-gray-200 rounded-lg shadow-lg p-6 max-w-sm w-full sm:w-80 md:w-96 relative"
        >
          <img
            src={card.icon}
            alt={`${card.title} Icon`}
            className="absolute top-4 right-4 h-10 w-10 object-contain"
          />
          <h2 className="text-xl font-bold text-black mb-2">{card.title}</h2>
          <p className="text-white">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Section;
