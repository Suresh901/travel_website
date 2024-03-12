"use client";
import React, { useRef, useState } from "react";
import TeamCard from "./TeamCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    id: 1,
    name: "Jessica Brown",
    status: "Consultant",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/team-1.jpg",
  },
  {
    id: 2,
    name: "Jessica Brown",
    status: "Consultant",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/team-2.jpg",
  },
  {
    id: 3,
    name: "Jessica Brown",
    status: "Consultant",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/team-6.jpg",
  },
  {
    id: 4,
    name: "Jessica Brown",
    status: "Consultant",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/team-5.jpg",
  },
  {
    id: 5,
    name: "Jessica Brown",
    status: "Consultant",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/team-3.jpg",
  },
  {
    id: 6,
    name: "Jessica Brown",
    status: "Consultant",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/team-4.jpg",
  },
];

const TeamSlider = () => {
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div
      className="mx-10 lg:mx-20 relative "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        {team.map((item) => {
          return (
            <div key={item.id}>
              <TeamCard item={item} />
            </div>
          );
        })}
      </Slider>
      <div
        className={`transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaAngleLeft
          className="h-8 w-8 cursor-pointer absolute top-[20rem] left-0 drop-shadow-xl bg-white rounded-md"
          onClick={handlePrevClick}
        />
        <FaAngleRight
          className="h-8 w-8 cursor-pointer absolute top-[20rem] right-0 shadow-xl bg-white rounded-md"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default TeamSlider;
