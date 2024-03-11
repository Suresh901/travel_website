import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const KathmanduImage = [
  {
    id: 1,
    img: "https://assets.vogue.in/photos/5ce431b346cf5953f8b18c74/4:3/w_1440,h_1080,c_limit/featured.2.jpg",
  },
  {
    id: 2,
    img: "https://www.welcomepickups.com/wp-content/uploads/2022/09/Kathmandu-Nepal.jpeg",
  },
  {
    id: 3,
    img: "https://assets.vogue.in/photos/5ce431b346cf5953f8b18c74/4:3/w_1440,h_1080,c_limit/featured.2.jpg",
  },
  {
    id: 4,
    img: "https://www.welcomepickups.com/wp-content/uploads/2022/09/Kathmandu-Nepal.jpeg",
  },
];
const ChitwanImage = [
  {
    id: 1,
    img: "https://assets.vogue.in/photos/5ce431b346cf5953f8b18c74/4:3/w_1440,h_1080,c_limit/featured.2.jpg",
  },
  {
    id: 2,
    img: "https://www.welcomepickups.com/wp-content/uploads/2022/09/Kathmandu-Nepal.jpeg",
  },
];

const tImage = [
  {
    id: 1,
    img: "https://cdn.britannica.com/06/96306-050-DFE8AFDC/Khao-Tapu-Ao-Phang-na-Thailand-National-Park.jpg",
  },
  {
    id: 2,
    img: "https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  },
];

export const KathmanduComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-[#25A6DC] uppercase text-sm">Explore Nepal</h1>
      <div className="grid grid-cols-4 lg:grid-cols-5 gap-5">
        {KathmanduImage.map((image) => (
          <div className="h-72 w-52 object-fill  ">
            <div>
              <img src={image.img} alt="" className="h-72 w-52 opacity-[90%]" />
            </div>
            <img src="" alt="" />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-[#0B6392]">
        <hr className="h-10 w-1 bg-[#3EB049]" />
        See all places
        <MdKeyboardDoubleArrowRight className="text-[#25A6DC]" />
      </div>
    </div>
  );
};

export const ChitwanComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-[#25A6DC] uppercase text-sm">Explore Nepal</h1>
      <div className="grid grid-cols-4 gap-5">
        {ChitwanImage.map((image) => (
          <div className="h-72 w-52 object-fill  ">
            <div>
              <img src={image.img} alt="" className="h-72 w-52 opacity-[90%]" />
            </div>
            <img src="" alt="" />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-[#0B6392]">
        <hr className="h-10 w-1 bg-[#3EB049]" />
        See all places
        <MdKeyboardDoubleArrowRight className="text-[#25A6DC]" />
      </div>
    </div>
  );
};
export const ThailandComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-[#25A6DC] uppercase text-sm">Explore Nepal</h1>
      <div className="grid grid-cols-4 gap-5">
        {tImage.map((image) => (
          <div className="h-72 w-52 object-fill  ">
            <div>
              <img src={image.img} alt="" className="h-72 w-52 opacity-[90%]" />
            </div>
            <img src="" alt="" />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-[#0B6392]">
        <hr className="h-10 w-1 bg-[#3EB049]" />
        See all places
        <MdKeyboardDoubleArrowRight className="text-[#25A6DC]" />
      </div>
    </div>
  );
};
