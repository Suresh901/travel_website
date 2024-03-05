"use client";

const Availability = () => {
  return (
    <div className="w-[90vw] h-[500px] mx-auto mt-[-90px] flex p-10">
      <div className="w-1/2 ">
        <img
          src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2.jpg"
          alt=""
          className="w-full h-full rounded-tl-md rounded-bl-md"
        />
      </div>
      <div className="w-1/2 bg-[#f3f8f6] rounded-tr-md rounded-br-md">
        <div className="flex- flex-col items-center p-5 pt-10">
          <h1 className="text-[#63AB45] bg-[#E1EFE0] p-2 rounded-md w-[100px]">
            Availability
          </h1>
          <h1 className="text-[22px] lg:text-[40px] ">
            Explore Real Adventure
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Availability;
