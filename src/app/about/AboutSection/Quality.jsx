import React from "react";
import { IoStarSharp } from "react-icons/io5";

const Quality = () => {
  return (
    <div
      className="pb-10"
      style={{
        backgroundImage:
          "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/bg-shape-05.png')",
      }}
    >
      <div className="mx-20 grid grid-cols-1 lg:grid-cols-2 border-b">
        <div>
          <img
            src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/icon-testimonial.png"
            alt=""
            className="p-10 lg:p-20 "
          />
        </div>
        <div className="lg:py-20 text-[22px] flex flex-col gap-5">
          <h1 className="font-bold">Quality Services</h1>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <IoStarSharp key={index} size={18} className="text-secondary" />
            ))}
          </div>

          <p className="border-b text-[20px] pb-5">
            To take trivial example which of ever undertakes laborious physical
            exercise, except to obtain some advantage from but who has any right
            to find fault with man who chooses to enjoy.
          </p>

          <div className="flex items-center gap-5 py-3 ">
            <div className="w-[82px] h-[82px] flex items-center justify-center">
              <img
                src="https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/testimonial.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="font-bold">Christine Eve</h1>
              <h1 className="text-text">Founder & CEO Quality Servies</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
