"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderObj = [
    {
        id: 1,
        location: "United Kingdom",
        image: "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-01.jpg",
    },
    {
        id: 2,
        location: "United Kingdom",
        image: "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-01.jpg",
    },
    {
        id: 3,
        location: "United Kingdom",
        image: "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-01.jpg",
    },
    {
        id: 4,
        location: "United Kingdom",
        image: "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-01.jpg",
    },
]

const PopularSlider = () => {
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
    return (
        <div className="mx-10 mb-10">
            <Slider {...settings}>
                {
                    sliderObj.map((item, id) => {
                        return (
                            <div key={id} className="w-1/4 h-[Hug (382.94px)] cursor-pointer p-2 rounded-lg pb-2 relative">
                                <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center">
                                    <div className="text-center z-[10]">
                                        <h1 className="text-[#63AB45] text-[20px]">Travel To</h1>
                                        <h1 className="font-semibold text-white">{item.location}</h1>
                                    </div>
                                </div>
                                <div className="">
                                    <img src={item.image} alt="image" className="rounded-md brightness-50" />
                                </div>
                                <span className="bg-[#F7921E] p-1 text-[11px] text-white px-3 rounded-md absolute top-[25px] right-[25px]">3 Tours</span>
                            </div>
                        )

                    })
                }
            </Slider>
        </div>
    )
}

export default PopularSlider