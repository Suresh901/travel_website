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
      <div className="flex items-center border-b-[2px] w-full text-[14px] space-x-2 pb-2 gap-1 relative">
        <IoLocationSharp size={30} />
        <div className="flex items-center justify-between text-[#82828A] w-full">
          <div className="flex flex-col">
            <h2 className="text-[14px] pb-10">Location</h2>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-black text-[16px] font-semibold absolute top-8 left-[34px] w-[90%] outline-none border border-red-500 border-none"
            >
              <option value="Location">Location</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
          </div>
          {/* <IoIosArrowDown /> */}
        </div>
      </div>

      <div className="flex items-center border-b-[2px] w-full  text-[14px] space-x-2 pb-2 gap-1">
        <MdBookmarkAdded size={30} />
        <div className="flex items-center justify-between text-[#82828A] w-full">
          <div className="flex flex-col">
            <h2 className="text-[14px]">Type</h2>
            <select
              value={bookingType}
              onChange={(e) => setBookingType(e.target.value)}
              className="text-black text-[16px] font-semibold"
            >
              <option value="Booking Type">Booking Type</option>
              <option value="Hotel">Hotel</option>
              <option value="Flight">Flight</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {/* <IoIosArrowDown /> */}
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
          <select
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            className="text-black text-[16px] font-semibold"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className="bg-brand text-white text-[16px] rounded-md gap-2 flex items-center justify-center cursor-pointer md:col-span-full lg:col-span-1">
        <IoSearch />
        <button className="">Search</button>
      </div>
    </div>
  );
};

export default HeroSearch;
