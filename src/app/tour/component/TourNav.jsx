"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TourNav = ({ scrollToSection, activeSection }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    swipeToSlide: 9,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          swipeToSlide: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          swipeToSlide: 3,
        },
      },
    ],
  };

  return (
    <nav className="h-12 font-[500] max-w-[1250px] m-auto px-3">
      <div>
        <Slider {...settings}>
          <span
            onClick={() => scrollToSection("Adventure")}
            className={`${
              activeSection === "Adventure" ? "bg-[#1C1C1C] text-[#ffffff]" : ""
            } py-3 text-center`}
          >
            Adventure
          </span>
          <span
            onClick={() => scrollToSection("Highlights")}
            className={`${
              activeSection === "Highlights"
                ? "bg-[#1C1C1C] text-[#ffffff]"
                : ""
            } py-3 text-center`}
          >
            Highlights
          </span>
          <span
            onClick={() => scrollToSection("Overview")}
            className={`${
              activeSection === "Overview" ? "bg-[#1C1C1C] text-[#ffffff]" : ""
            } py-3 text-center`}
          >
            Overview
          </span>
          <span
            onClick={() => scrollToSection("Inclusions")}
            className={`${
              activeSection === "Inclusions"
                ? "bg-[#1C1C1C] text-[#ffffff]"
                : ""
            } py-3 text-center`}
          >
            Inclusions
          </span>
          <span
            onClick={() => scrollToSection("Exclude")}
            className={`${
              activeSection === "Exclude" ? "bg-[#1C1C1C] text-[#ffffff]" : ""
            } py-3 text-center`}
          >
            Exclude
          </span>
          <span
            onClick={() => scrollToSection("Camp")}
            className={`${
              activeSection === "Camp" ? "bg-[#1C1C1C] text-[#ffffff]" : ""
            } py-3 text-center`}
          >
            Base Camp
          </span>
          <span
            onClick={() => scrollToSection("Map")}
            className={`${
              activeSection === "Map" ? "bg-[#1C1C1C] text-[#ffffff]" : ""
            } py-3 text-center`}
          >
            Map
          </span>
          <span
            onClick={() => scrollToSection("video")}
            className={`${
              activeSection === "video" ? "bg-[#1C1C1C] text-[#ffffff]" : ""
            } py-3 text-center`}
          >
            video
          </span>
          <span
            onClick={() => scrollToSection("FAQS")}
            className={`${
              activeSection === "FAQS" ? "bg-[#1C1C1C] text-[#ffffff]" : ""
            } py-3 text-center`}
          >
            FAQS
          </span>
        </Slider>
      </div>
    </nav>
  );
};

export default TourNav;
