"use client";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ChitwanComponent, KathmanduComponent } from "./PlaceComponent";

const Nepal = [
  {
    id: 1,
    place: "Kathmandu",
    desc: "cultural heritage palce",
  },
  {
    id: 2,
    place: "Pokhara",
    desc: "cultural heritage palce",
  },
  {
    id: 3,
    place: "Chitwan",
    desc: "cultural heritage palce",
  },
  {
    id: 4,
    place: "Mustang",
    desc: "cultural heritage palce",
  },
];

const ExploreNepal = () => {
  const [selectedPlace, setSelectedPlace] = useState(
    Nepal.find((item) => item.place === "Kathmandu")
  );
  console.log(selectedPlace);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };
  return (
    <div className=" w-screen z-[999] bg-white border">
      <div className=" border-gray-300 p-4">
        <div className="flex gap-3 p-5">
          <div className="flex flex-col gap-2">
            {Nepal.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-[#F7F9FC] p-2 cursor-pointer"
                onClick={() => handlePlaceClick(item)}
              >
                <div className="w-64">
                  <h1 className="font-bold text-[#0a0d0e]">{item.place}</h1>
                  <p className="font-thin text-xs">{item.desc}</p>
                </div>
                <div>
                  <MdKeyboardDoubleArrowRight className="text-[#25A6DC]" />
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="w-[0.1px] h-auto border"></div>
          <div className="">
            {selectedPlace?.place === "Kathmandu" && <KathmanduComponent />}
            {selectedPlace?.place === "Chitwan" && <ChitwanComponent />}
            {/* {selectedPlace?.place === "Pokhara" && <PlaceComponent />} */}
            {/* {selectedPlace?.place === "Mustang" && <PlaceComponent />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNepal;
