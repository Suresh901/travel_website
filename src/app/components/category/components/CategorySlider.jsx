"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderObj = [
  {
    id: 1,
    title: "Discovery",
    image: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero."
  },
  {
    id: 2,
    title: "Discovery",
    image: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero."
  },
  {
    id: 3,
    title: "Discovery",
    image: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero."
  },
  {
    id: 4,
    title: "Discovery",
    image: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero."
  },
  {
    id: 5,
    title: "Discovery",
    image: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero."
  },

]

const CategorySlider = () => {
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-10 mt-[-50px]">
      <Slider {...settings}>
        {
          sliderObj.map((item, id) => {
            return (
              <div key={id} className="shadow-xl p-5 w-1/5 h-[261.19px] cursor-pointer bg-[#FFFFFF] rounded-md">
                <h1 className="font-semibold">{item.title}</h1>
                <div>
                  <img src={item.image} alt="image" />
                </div>
                <p className="text-[15px]">{item.desc}</p>
              </div>
            )

          })
        }
      </Slider>
    </div>
  )
}

export default CategorySlider