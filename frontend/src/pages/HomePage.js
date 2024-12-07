// src/pages/HomePage.js
import React from 'react';
import CasesCarousel from '../components/CasesCarousel';
import ResponsiveCarousel from '../components/HomeCarousel';
import ServicesSection from '../components/HomePageComp/Services';
import Marquee from '../components/HomePageComp/MarqueeComp';
import About from '../components/About';
import Section from '../components/HomePageComp/Section';

const images = [
  { src: "/assets/cp1.jpg", alt: "First slide" },
  { src: "/assets/cp2.jpg", alt: "Second slide" },
  { src: "/assets/cp3.jpg", alt: "Third slide" },
];


const reviews = [
  {
    image: "/review/resume.png",
    name: "John Doe",
    text: "Amazing product! Highly recommended.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Jane Smith",
    text: "Fantastic service and quality!",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Mike Lee",
    text: "A great experience overall.",
  },
];



const HomePage = () => {
  return (
    <div>
      <ResponsiveCarousel images={images} />
      <Section/>
      <About/>
      <ServicesSection/>
      <CasesCarousel/>
      <Marquee reviews={reviews} />
    </div>
  );
};

export default HomePage;
