"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const sliderObj = [
  {
    id: 1,
    location: "United Kingdom",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-01.jpg",
  },
  {
    id: 2,
    location: "United Kingdom",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-01.jpg",
  },
  {
    id: 3,
    location: "United Kingdom",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-01.jpg",
  },
  {
    id: 4,
    location: "United Kingdom",
    image:
      "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-01.jpg",
  },
];

const PopularSlider = () => {
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
      className="lg:mx-10 mb-10 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        {sliderObj.map((item, id) => {
          return (
            <div
              key={id}
              className=" h-[Hug (382.94px)] cursor-pointer p-2 rounded-lg pb-2 relative"
            >
              <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center">
                <div className="text-center z-[10]">
                  <h1 className="text-[#63AB45] text-[20px]">Travel To</h1>
                  <h1 className="font-semibold text-white">{item.location}</h1>
                </div>
              </div>
              <div className="">
                <img
                  src={item.image}
                  alt="image"
                  className="rounded-md brightness-50"
                />
              </div>
              <span className="bg-[#F7921E] p-1 text-[11px] text-white px-3 rounded-md absolute top-[25px] right-[25px]">
                3 Tours
              </span>
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
          className="h-8 w-8 cursor-pointer absolute top-[9rem] left-0 drop-shadow-xl bg-white rounded-md"
          onClick={handlePrevClick}
        />
        <FaAngleRight
          className="h-8 w-8 cursor-pointer absolute top-[9rem] right-0 shadow-xl bg-white rounded-md"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default PopularSlider;
