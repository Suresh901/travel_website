import React from "react";
import Button from "./Button";
import CircularProgress from "./CircularProgress";

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 gap-5 lg:gap-20">
      <div>
        <div className="pb-20">
          <h1 className="text-brand bg-[#E1EFE0] p-2 rounded-md text-[16px] font-semibold w-[200px] flex items-center justify-center">
            Welcome to GoWilds
          </h1>
          <h1 className="pt-5 font-bold text-[20px] sm:text-[25px] md:text-[36px] lg:text-[48px]">
            We are most funning company about travel and adventure
          </h1>

          <p className="text-text pt-5 text-[18px]">
            Sit amet consectetur velit integer tincidunt sceleries nodalesry
            volutpat neque fermentum malesuada sceleris quecy massa lacus
            ultrices eget leo cras odio blandit rhoncus eues feugiat.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 justify-items-evenly w-full md:w-2/3 lg:w-4/5 drop-shadow-2xl ">
          <div className="col-span-6">
            <Button
              label="Family Camping"
              className="p-2 shadow-2xl rotate-[-8deg] px-2 "
            />
          </div>
          <div className="col-span-6">
            <Button
              label="Wild Camping"
              className="p-2 shadow-xl rotate-[3deg] px-2 "
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
              className="p-2 shadow-xl rotate-[3.5deg] -ml-5 md:-ml-10"
            />
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center p-5 md:p-10 w-[320px] md:w-[564px] lg:h-[666.64px]">
        <img
          src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-15.jpg"
          alt="img"
          className="rounded-tl-full rounded-tr-full"
        />
      </div>

      <div className=" flex items-center justify-center p-5 md:p-10 w-[320px] md:w-[564px] lg:h-[666.64px]">
        <img
          src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/image-07.jpg"
          alt="img"
          className="rounded-tl-full rounded-tr-full"
        />
      </div>

      <div>
        <div className="pb-10">
          <h1 className="text-brand bg-[#E1EFE0] p-2 rounded-md text-[16px] font-semibold w-[200px] flex items-center justify-center">
            Who we are
          </h1>
          <h1 className="pt-5 font-bold text-[20px] sm:text-[25px] md:text-[36px] lg:text-[48px]">
            Great opportunity for adventure & travels
          </h1>

          <p className="text-text pt-5 text-[18px]">
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
