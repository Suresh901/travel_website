"use client";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdBookmarkAdded } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const HeroSearch = () => {
  // State variables to manage dropdown values
  const [location, setLocation] = useState("Location");
  const [bookingType, setBookingType] = useState("Booking Type");
  const [dateFrom, setDateFrom] = useState("Date From");
  const [guest, setGuest] = useState("0");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
      <div className="flex items-center border-b-[2px] w-full text-[14px] space-x-2 pb-2 gap-1 ">
        <IoLocationSharp size={30} />
        <div className="flex items-center justify-between text-[#82828A] w-full">
          <div className="flex flex-col">
            <h2 className="text-[14px]">Location</h2>
            <h1 className="font-bold text-black">Location</h1>
          </div>
          <IoIosArrowDown />
        </div>
      </div>

      <div className="flex items-center border-b-[2px] w-full  text-[14px] space-x-2 pb-2 gap-1">
        <MdBookmarkAdded size={30} />
        <div className="flex items-center justify-between text-[#82828A] w-full">
          <div className="flex flex-col">
            <h2 className="text-[14px]">Type</h2>
            <h1 className="font-bold text-black">Type</h1>
          </div>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="flex items-center border-b-[2px] w-full text-[14px] space-x-2 pb-2 gap-1">
        <BsCalendar2DateFill size={25} />
        <div className="flex flex-col">
          <h2 className="text-[14px] text-[#82828A]">Date From</h2>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="text-black text-[16px] font-semibold"
          />
        </div>
      </div>

      <div className="flex items-center border-b-[2px] w-full  text-[14px] space-x-2 pb-2 gap-1">
        <FaUser size={25} />
        <div className="flex flex-col">
          <h2 className="text-[14px] text-[#82828A]">Guest</h2>
          <h2 className="text-black font-bold">Guest</h2>
        </div>
      </div>

      <div className="bg-brand text-white text-[16px] rounded-md gap-2 flex items-center justify-center cursor-pointer md:col-span-full lg:col-span-1">
        <div className="flex items-center justify-center gap-5 p-2">
          <IoSearch />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
