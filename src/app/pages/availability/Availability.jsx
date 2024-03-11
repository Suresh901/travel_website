"use client";

import Heading from "@/app/components/Heading";
import Accordion from "./components/Accordion";
import { IoMdPlay } from "react-icons/io";

const Availability = () => {
  return (
    <div className="md:w-[90vw] h-auto md:mx-auto mt-[-120px] md:flex p-5 md:p-10">
      <div className="md:w-1/2 relative">
        <img
          src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2.jpg"
          alt=""
          className="w-full h-full rounded-tl-md rounded-tr-md md:rounded-bl-md"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <IoMdPlay
            className="bg-brand rounded-full flex items-center text-white hover:animate-ping p-4 ml-1 cursor-pointer"
            size={70}
          />
        </div>
      </div>
      <div className="md:w-1/2 bg-[#f3f8f6] rounded-bl-md rounded-br-md md:rounded-tr-md  p-1 md:p-0">
        <div className="flex flex-col items-start p-5 pt-10 md:ml-5">
          <Heading heading={"Availability"} title={"Explore Real Adventure"} />
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Availability;
