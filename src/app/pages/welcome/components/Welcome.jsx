import React from "react";
import Button from "./Button";
import CircularProgress from "./CircularProgress";

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-5 lg:mx-10 gap-5 lg:gap-20">
      <div className="order-1">
        <div className="pb-10">
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <h1 className="text-brand bg-[#E1EFE0] p-2 rounded-md text-[16px] font-semibold w-auto ">
              Welcome to GoWilds
            </h1>
          </div>

          <h1 className="pt-2 lg:pt-5 font-bold text-[20px] sm:text-[25px] md:text-[30px] lg:text-[48px]">
            We are most funning company about travel and adventure
          </h1>

          <p className=" pt-2 lg:pt-5 text-[14px] lg:text-[18px]">
            Sit amet consectetur velit integer tincidunt sceleries nodalesry
            volutpat neque fermentum malesuada sceleris quecy massa lacus
            ultrices eget leo cras odio blandit rhoncus eues feugiat.
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <div className="grid grid-cols-12 gap-4 lg:gap-6 drop-shadow-2xl pb-10 md:pb-0">
            <div className="col-span-6">
              <Button
                label="Family Camping"
                className="p-2 shadow-2xl rotate-[-8deg] px-2 "
              />
            </div>
            <div className="col-span-6">
              <Button
                label="Wild Camping"
                className="p-2 shadow-xl rotate-[3deg] px-2   "
              />
            </div>
            <div className="col-span-4">
              <Button
                label="Fishing"
                className="p-2 shadow-xl rotate-[-8deg] px-2 "
              />
            </div>
            <div className="col-span-8">
              <Button
                label="Mountain Biking"
                className="p-2 shadow-xl rotate-[3.5deg] px-2 "
              />
            </div>
            <div className="col-span-6 ">
              <Button
                label="Luxury Cabin"
                className="p-2 shadow-xl rotate-[-8deg] px-2 "
              />
            </div>
            <div className="col-span-6 ">
              <Button
                label="Couple Camping"
                className="p-2 shadow-xl rotate-[3.5deg] "
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" order-2 flex items-center justify-center p-2 lg:p-10  lg:h-[666.64px] ">
        <img
          src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-15.jpg"
          alt="img"
          className="rounded-tl-full rounded-tr-full w-full
          "
        />
      </div>

      <div className=" order-4 md:order-3 flex items-center justify-center p-2 lg:p-10 lg:h-[666.64px]">
        <img
          src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/image-07.jpg"
          alt="img"
          className="rounded-tl-full rounded-tr-full w-full"
        />
      </div>

      <div className="order-3 md:order-4">
        <div className="pb-10">
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <h1 className="text-brand bg-[#E1EFE0] p-2 rounded-md text-[16px] font-semibold w-auto ">
              Who we are
            </h1>
          </div>
          <h1 className="pt-5 font-bold text-[20px] sm:text-[25px] md:text-[30px] lg:text-[48px]">
            Great opportunity for adventure & travels
          </h1>

          <p className=" pt-2 lg:pt-5 text-[14px] lg:text-[18px]">
            Sit amet consectetur velit integer tincidunt sceleries nodalesry
            volutpat neque fermentum malesuada sceleris quecy massa lacus
            ultrices eget leo cras odio blandit rhoncus eues feugiat.
          </p>
        </div>
        <div className="bg-white drop-shadow-xl w-[Fill (611px)] h-[Hug (246.8px)] p-10 flex justify-around rounded-md">
          <div className="border-r w-1/2">
            <CircularProgress label="Satisfied Clients" value={50} />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <CircularProgress label="Success Rate" value={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
