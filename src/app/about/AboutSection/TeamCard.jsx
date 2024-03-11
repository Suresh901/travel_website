import React from "react";

const TeamCard = ({ item }) => {
  return (
    <div>
      <div className="flex flex-col items-center pb-5">
        <div className=" w-full p-16 z-40">
          <img src={item.image} alt="" className="h-full w-full" />
        </div>
        <div className="drop-shadow-lg w-full bg-white mt-[-8rem] flex flex-col items-center justify-end h-[160px] pb-8 rounded-md">
          <h1 className="font-bold"> {item.name}</h1>
          <h1>{item.status}</h1>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
