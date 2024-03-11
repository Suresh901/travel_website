import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-[304px] flex flex-col items-center justify-center gap-2 z-50 pb-10"
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
      <div className="text-white  flex flex-col justify-center ">
        <h1 className="text-[42px] font-bold">Contact</h1>
        <h2 className="text-[16px] cursor-pointer">
          <Link href="/"> Home</Link>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; Contact
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
