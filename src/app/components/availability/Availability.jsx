"use client";

import Accordion from "./components/Accordion";
import { IoMdPlay } from "react-icons/io";

const Availability = () => {
  return (
    <div className="w-[90vw] h-auto mx-auto mt-[-90px] flex p-10">
      <div className="w-1/2 relative">
        <img
          src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2.jpg"
          alt=""
          className="w-full h-full rounded-tl-md rounded-bl-md"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <IoMdPlay
            className="bg-brand rounded-full flex items-center text-white hover:animate-ping p-4 ml-1 cursor-pointer"
            size={70}
          />
        </div>
      </div>
      <div className="w-1/2 bg-[#f3f8f6] rounded-tr-md rounded-br-md">
        <div className="flex flex-col items-start p-5 pt-10 ml-5">
          <h1 className="text-[#63AB45] bg-[#E1EFE0] p-2 rounded-md w-[100px]">
            Availability
          </h1>
          <h1 className="text-[22px] lg:text-[40px] ">
            Explore Real Adventure
          </h1>
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Availability;
