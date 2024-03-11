import React from "react";

const Card = ({ item }) => {
  return (
    <div className="bg-[#f3f8f6] p-20  rounded-xl">
      <h1>{item.logo}</h1>
      <h1 className="font-bold">{item.label}</h1>
      <h1>{item.label1}</h1>
      <h1>{item.label2}</h1>
    </div>
  );
};

export default Card;
