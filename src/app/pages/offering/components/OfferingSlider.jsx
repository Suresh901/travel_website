"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const sliderObj = [
  {
    id: 1,
    title: "Discovery",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero.",
  },
  {
    id: 2,
    title: "Discovery",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero.",
  },
  {
    id: 3,
    title: "Discovery",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero.",
  },
  {
    id: 4,
    title: "Discovery",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero.",
  },
  {
    id: 5,
    title: "Discovery",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero.",
  },
];

const OfferingSlider = () => {
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      className="mt-[-50px] pb-10 mx-3 lg:mx-10 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        {sliderObj.map((item, id) => {
          return (
            <div key={id} className="size-64 cursor-pointer">
              <img
                src={item.image}
                alt="image"
                className="rounded-md h-full w-full"
              />
            </div>
          );
        })}
      </Slider>
      <div
        className={`flex justify-end transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaAngleLeft
          className="h-8 w-8 cursor-pointer absolute top-[7rem] left-0 drop-shadow-xl bg-white rounded-md"
          onClick={handlePrevClick}
        />
        <FaAngleRight
          className="h-8 w-8 cursor-pointer absolute top-[7rem] right-0 shadow-xl bg-white rounded-md"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default OfferingSlider;
