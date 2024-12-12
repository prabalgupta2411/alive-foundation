import React from "react";
import ParallaxSection from "../components/HomePageComp/ParallaxSection";
import VolunteerForm from "../components/VolunteerForm";
import Section from "../components/HomePageComp/Section";

function BecomeVolunteer() {
  return (
    <div className="bg-[#F8FFFF]">
      <ParallaxSection />
      <div className="p-4">
        <VolunteerForm />
      </div>
      <Section />
    </div>
  );
}

export default BecomeVolunteer;
