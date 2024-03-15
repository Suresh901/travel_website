"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";

const sliderObj = [
  {
    id: 1,
    title: "Discovery",
    image: <MdOutlineTravelExplore />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero.",
  },
  {
    id: 2,
    title: "Discovery",
    image: <MdOutlineTravelExplore />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero.",
  },
  {
    id: 3,
    title: "Discovery",
    image: <MdOutlineTravelExplore />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero.",
  },
  {
    id: 4,
    title: "Discovery",
    image: <MdOutlineTravelExplore />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero.",
  },
  {
    id: 5,
    title: "Discovery",
    image: <MdOutlineTravelExplore />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero.",
  },
];

const CategorySlider = () => {
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState();
  const [centerIndex, setCenterIndex] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Remove padding from center item
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setCenterIndex(next);
    },
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="mx-5 lg:mx-10 mt-[-50px] pb-10 relative">
      <Slider ref={sliderRef} {...settings}>
        {sliderObj.map((item, id) => {
          return (
            <div
              key={id}
              className={`border-b border-gray-200 shadow-md p-8 h-[261.19px] cursor-pointer bg-[#FFFFFF] rounded-md pb-2 relative group ${
                centerIndex === id ? "bg-brand text-white" : ""
              }
                ${hovered === id ? "bg-brand text-white" : ""}`}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={`flex flex-col gap-5`}>
                <h1 className="font-semibold">{item.title}</h1>
                <div>
                  <div className="text-4xl pb-1">{item.image}</div>
                  <div
                    className={`border h-1 ${
                      centerIndex === id
                        ? "w-10 bg-white"
                        : "bg-black group-hover:w-10 duration-100 w-5"
                    }
                    ${hovered === id ? "w-10 bg-white" : ""}`}
                  ></div>
                </div>
                <p className="text-[15px]">{item.desc}</p>
              </div>
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

export default CategorySlider;
