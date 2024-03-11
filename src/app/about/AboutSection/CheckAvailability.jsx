import Button from "@/app/components/Button";
import React from "react";
import { IoMdPlay } from "react-icons/io";

const data = [
  { id: 1, logo: "logo", label: "Wildlife Tours" },
  { id: 2, logo: "logo", label: "Paragliding Tours" },
  { id: 3, logo: "logo", label: "Adventure Tours" },
  { id: 4, logo: "logo", label: "Hang Gliding Tours" },
];

const CheckAvailability = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/bg-01.jpg' ) ",
        width: "full",
      }}
      className="bg-fixed h-auto py-20 relative"
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50 "></div>

      <div className="relative">
        <div className="flex flex-col lg:flex-row mx-5 lg:mx-20 pt-40 ">
          <div className=" w-full lg:w-1/2 flex flex-col items-start pb-10 ">
            <div className="pb-10 flex gap-3">
              <IoMdPlay
                className="bg-brand rounded-full flex items-center justify-center text-white hover:animate-ping  p-4 cursor-pointer"
                size={70}
              />
              <img
                src="https://gaviaspreview.com/wp/gowilds/wp-content/themes/gowilds/assets/images/arrow.png"
                alt=""
                className="h-[45px] w-[31px] mt-14"
              />
            </div>
            <h1 className="text-secondary bg-[#2d3b2b] p-2 rounded-md text-[16px] w-auto ">
              Are you ready to travel?
            </h1>
            <h1 className="text-white text-[20px] md:text-[48px] pb-10">
              Ready to travel with real adventure and enjoy natural
            </h1>
            <Button label="Check Availability" />
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 rounded-md text-white mx-5 gap-2">
            {data.map((item, id) => {
              return (
                <div className="border-2 border-[#413934] rounded-md h-[215.5px] flex justify-center items-center text-[20px] font-bold">
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailability;
