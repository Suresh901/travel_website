import React from "react";
import { IoMdPlay } from "react-icons/io";

const Ready = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/bg-01.jpg' ) ",
        width: "full",
      }}
      className="bg-fixed py-20"
    >
      <div className="mx-5 lg:mx-20 flex items-center justify-between">
        <h1 className="text-white text-[20px] md:text-[30px] lg:text-[50px] font-bold">
          Ready to travel with real <br />
          adventure and enjoy natural
        </h1>
        <IoMdPlay className="bg-white rounded-full flex items-center justify-center hover:animate-ping size-10 md:size-16 p-3 md:p-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default Ready;
