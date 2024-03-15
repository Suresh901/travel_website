import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ heading, setOpen, open, data, handleClick, label }) => {
  return (
    <div className="flex flex-col w-full relative ">
      <h2 className="text-[14px] mb-2 text-[#82828A]">{label}</h2>
      {/* dropdown */}
      <div
        className="bg-white w-full flex items-center justify-between "
        onClick={() => setOpen(!open)}
      >
        <h1 className="font-bold">{heading}</h1>
        <div>
          <IoIosArrowDown />
        </div>
      </div>
      {open && (
        <ul className="bg-gray-100 w-full absolute top-14 overflow-y-auto max-h-60">
          {data.map((item, id) => {
            console.log(item);
            return (
              <li
                key={id}
                className="p-2 hover:bg-sky-600 hover:text-white cursor-pointer"
                onClick={() => handleClick(item.place)}
              >
                {item.place}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
