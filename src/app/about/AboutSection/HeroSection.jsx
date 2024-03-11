import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="h-[304px] pt-20 px-20"
      style={{
        backgroundImage:
          "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/slider-1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        height: "full",
      }}
    >
      <div className="text-white  flex flex-col ">
        <h1 className="text-[42px] font-bold">About</h1>
        <h2 className="text-[16px] cursor-pointer">
          People Don’t Take, Trips Take People
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
