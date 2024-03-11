import Heading from "@/app/components/Heading";
import React from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdPriceCheck } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";

const Opportunity = () => {
  return (
    <div className="flex flex-col lg:flex-row  lg:mx-40 gap-10 my-10">
      <div className="w-full lg:w-1/2 grid grid-cols-2 items-center gap-10 p-5">
        <div>
          <img
            src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-16.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-17.jpg"
            alt=""
          />
        </div>
        <div className="col-span-full flex items-center justify-center ">
          <img
            src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-18.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 mx-5">
        <div className="">
          <Heading
            heading="Who We Are"
            title={`Great opportunity for \n adventure & travels`}
          />
        </div>

        <div className="pb-10 flex flex-col gap-5 mt-10 relative">
          <div className="w-[1px] h-60 border border-dashed absolute left-[5rem] top-3"></div>

          <div className="flex gap-5 md:gap-10">
            <div className="flex flex-col justify-between gap-10 z-[200]">
              <div className="flex items-center gap-2 md:gap-5 ">
                <LuBadgeCheck size={30} className=" text-secondary " />
                <div className="rounded-full text-white bg-brand w-[60px] h-[60px] flex items-center justify-center">
                  <FaHelmetSafety size={30} />
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-5 z-[200]">
                <LuBadgeCheck size={30} className=" text-secondary " />
                <div className="rounded-full text-white bg-brand w-[60px] h-[60px] flex items-center justify-center">
                  <MdPriceCheck size={30} />
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-5 z-[200]">
                <LuBadgeCheck size={30} className=" text-secondary " />
                <div className="rounded-full text-white bg-brand w-[60px] h-[60px] flex items-center justify-center">
                  <PiAirplaneTiltFill size={30} />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-10">
              <div>
                <h1 className="font-bold">Safety First Always</h1>
                <h1 className="text-text">
                  Set perspiciatis unde omnis estenatus voluptatem totarem
                  aperiae.
                </h1>
              </div>
              <div>
                <h1 className="font-bold">Safety First Always</h1>
                <h1 className="text-text">
                  Set perspiciatis unde omnis estenatus voluptatem totarem
                  aperiae.
                </h1>
              </div>
              <div>
                <h1 className="font-bold">Safety First Always</h1>
                <h1 className="text-text">
                  Set perspiciatis unde omnis estenatus voluptatem totarem
                  aperiae.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
