import React from "react";
import { IoLocationSharp, IoStarSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoTime } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = () => {
  return (
    <div className="flex flex-col ">
      <div className="">
        <img
          src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-6.jpg"
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className=" border bg-white -mt-8 rounded-3xl pt-5 drop-shadow-lg">
        <div className="mx-5 flex flex-col gap-2 pb-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <IoStarSharp key={index} size={18} className="text-secondary" />
            ))}
          </div>

          <h1 className="font-semibold text-[18px]">
            Discovery Island Kayak Tour
          </h1>

          <div className="flex items-center gap-2 text-[14px]">
            <IoLocationSharp className="text-brand" size={20} />
            <h1>hello</h1>
          </div>

          <div className="flex items-center gap-2 pb-3 border-b text-[14px]">
            <RiMoneyDollarCircleFill className="text-brand" size={20} />
            <h1>hello</h1>
          </div>

          <div className="flex items-center justify-between text-[12px]">
            <div className="flex gap-2">
              <div className="flex items-center gap-2 ">
                <IoTime className="text-brand" size={20} />
                <h1>3 Days</h1>
              </div>

              <div className="flex items-center gap-2 ">
                <IoPeople className="text-brand" size={20} />
                <h1>10</h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <h1>Explore</h1>
              <IoIosArrowRoundForward size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
