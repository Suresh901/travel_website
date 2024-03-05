"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderObj = [
    {
        id: 1,
        title: "Discovery",
        image: "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero."
    },
    {
        id: 2,
        title: "Discovery",
        image: "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero."
    },
    {
        id: 3,
        title: "Discovery",
        image: "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero."
    },
    {
        id: 4,
        title: "Discovery",
        image: "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero."
    },
    {
        id: 5,
        title: "Discovery",
        image: "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero."
    },

]

const OfferingSlider = () => {
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
                    slidesToShow: 3,
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
    return (
        <div className="mx-20 mt-[-50px] pb-10">
            <Slider {...settings}>
                {
                    sliderObj.map((item, id) => {
                        return (
                            <div key={id} className=" w-1/4 h-[Hug (285.19px)] cursor-pointer pl-[10px]">
                                <img src={item.image} alt="image" className="rounded-md" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default OfferingSlider