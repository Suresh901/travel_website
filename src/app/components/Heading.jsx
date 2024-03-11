import React from "react";

const Heading = ({ heading, title, className, className1 }) => {
  return (
    <>
      <h1
        className={`text-[#63AB45] bg-[#E1EFE0] p-2 rounded-md inline-block text-[20px] ${className}`}
      >
        {heading}
      </h1>

      <h1
        className={`text-[22px] md:text-[35px] lg:text-[40px] font-bold pt-5 ${className1}`}
        style={{ whiteSpace: "pre-line" }}
      >
        {title}
      </h1>
    </>
  );
};

export default Heading;
