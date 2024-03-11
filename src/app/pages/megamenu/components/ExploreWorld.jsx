"use client";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ThailandComponent } from "./PlaceComponent";

const country = [
  {
    id: 1,
    place: "Thailand",
    desc: "Beautiful place",
  },
  {
    id: 2,
    place: "India",
    desc: "Beautiful place",
  },
  {
    id: 3,
    place: "Europe",
    desc: "Beautiful place",
  },
  {
    id: 4,
    place: "Africa",
    desc: "Beautiful place",
  },
];

const ExploreWorld = () => {
  const [selectedPlace, setSelectedPlace] = useState(
    country.find((item) => item.place === "Thailand")
  );
  //   console.log(selectedPlace);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };
  return (
    <div className="w-screen z-[999]">
      <div className="  bg-white border border-gray-300 p-4">
        <div className="flex gap-3 p-5">
          <div className="flex flex-col justify-between  gap-4">
            {country.map((item) => (
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
          <div>
            {selectedPlace?.place === "Thailand" && <ThailandComponent />}
            {selectedPlace?.place === "India" && <ThailandComponent />}
            {/* {selectedPlace?.place === "Pokhara" && <PlaceComponent />} */}
            {/* {selectedPlace?.place === "Mustang" && <PlaceComponent />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreWorld;
