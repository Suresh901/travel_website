"use client";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdBookmarkAdded } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import Dropdown from "./Dropdown";

const locations = [
  {
    id: 1,
    place: "Thailand",
  },
  {
    id: 2,
    place: "India",
  },
  {
    id: 3,
    place: "USA",
  },
  {
    id: 4,
    place: "Europe",
  },
  {
    id: 5,
    place: "Canada",
  },
  {
    id: 6,
    place: "Japan",
  },
  {
    id: 7,
    place: "Russia",
  },
  {
    id: 8,
    place: "China",
  },
  {
    id: 9,
    place: "Australia",
  },
  {
    id: 10,
    place: "Bhutan",
  },
];
const type = [
  {
    id: 1,
    place: "hiking",
  },
  {
    id: 2,
    place: "Bunjee",
  },
  {
    id: 3,
    place: "Adventure",
  },
  {
    id: 4,
    place: "Rafting",
  },
];
const Guest = [
  {
    id: 1,
    place: "Children",
  },
  {
    id: 2,
    place: "Adult",
  },
  {
    id: 3,
    place: "Youth",
  },
  {
    id: 4,
    place: "Old age",
  },
];

const HeroSearch = () => {
  // State variables to manage dropdown values
  const [open, setOpen] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);
  const [location, setLocation] = useState("Select Location");
  const [booking, setBooking] = useState("Type");
  const [dateFrom, setDateFrom] = useState("Date From");
  const [guest, setGuest] = useState("Children");

  const handleLocation = (place) => {
    setLocation(place);
    setOpen(false);
  };
  const handleType = (place) => {
    setBooking(place);
    setOpenBooking(false);
  };
  const handleGuest = (place) => {
    setGuest(place);
    setOpenGuest(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
      <div className="flex items-center border-b-[2px] text-[14px] space-x-2 pb-2 gap-1 ">
        <IoLocationSharp size={30} />
        <div className="flex items-center justify-between w-full">
          <Dropdown
            heading={location}
            setOpen={setOpen}
            open={open}
            data={locations}
            handleClick={handleLocation}
            label="Location"
          />
        </div>
      </div>

      <div className="flex items-center border-b-[2px] text-[14px] space-x-2 pb-2 gap-1 z-[1]">
        <MdBookmarkAdded size={30} />
        <div className="flex items-center justify-between w-full">
          <Dropdown
            heading={booking}
            setOpen={setOpenBooking}
            open={openBooking}
            data={type}
            handleClick={handleType}
            label="Type"
          />
        </div>
      </div>

      <div className="flex items-center border-b-[2px] w-full text-[14px] space-x-2 pb-2 gap-1">
        <BsCalendar2DateFill size={25} />
        <div className="flex flex-col justify-between  w-full">
          <h2 className="text-[14px] text-[#82828A] mb-2">Date From</h2>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="text-black text-[16px] font-semibold outline-none"
          />
        </div>
      </div>

      <div className="flex items-center border-b-[2px] w-full  text-[14px] space-x-2 pb-2 gap-1 z-10">
        <FaUser size={25} />
        <div className="flex flex-col justify-between w-full">
          <Dropdown
            heading={guest}
            setOpen={setOpenGuest}
            open={openGuest}
            data={Guest}
            handleClick={handleGuest}
            label="Guest"
          />
        </div>
      </div>

      <div className=" text-[16px] rounded-md  md:col-span-full xl:col-span-1">
        <div className="flex items-center justify-center gap-5 p-4 rounded-md  bg-brand text-white cursor-pointer">
          <IoSearch size={20} />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
