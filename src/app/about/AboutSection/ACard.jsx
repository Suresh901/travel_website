import React from "react";

const ACard = ({ item, customClass }) => {
  return (
    <div
      className={`rounded-md bg-white drop-shadow-lg flex flex-col items-center justify-center p-2 lg:p-10 ${customClass} `}
    >
      <div className="flex flex-col gap-5">
        <div className="bg-brand w-[60px] h-[60px] rounded-full"></div>
        <h1 className="font-bold">{item.label}</h1>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default ACard;
