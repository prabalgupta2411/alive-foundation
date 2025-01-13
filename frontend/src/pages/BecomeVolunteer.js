import React from "react";
import ParallaxSection from "../components/HomePageComp/ParallaxSection";
import VolunteerForm from "../components/VolunteerForm";
import Section from "../components/HomePageComp/Section";
import FullScreenImage from "../components/FullScreenImage";

function BecomeVolunteer() {
  return (
    <div className="bg-[#F8FFFF]">
      <FullScreenImage
        imageSrc="./assets/cp3.jpg"
        text="Become a Volunteer"
        />
      <Section />
      <div className="p-4">
        <VolunteerForm />
      </div>
      <ParallaxSection />
    </div>
  );
}

export default BecomeVolunteer;
