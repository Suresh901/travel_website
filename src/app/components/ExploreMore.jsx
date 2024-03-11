import React from "react";

const ExploreMore = () => {
  return (
    <div
      className="w-[90vw] rounded-xl mb-10 flex flex-col md:flex-row items-center justify-between p-8 gap-2"
      style={{
        backgroundImage:
          "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/bg-shape-04.png')",
        height: "auto",
        width: "full",
        backgroundColor: "#63AB45",
      }}
    >
      <div className=" text-white">
        <div className="flex gap-5">
          <div>
            <img
              src="https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/logo-small-white.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-[16px] md:text-[20px]">QUISEQUE VEL ORTOR</h1>
            <h1 className="text-bold text-[20px] md:text-[36px]">
              Ready to adventure and enjoy natural
            </h1>
          </div>
        </div>
      </div>
      <button className="p-2 md:p-4 font-bold bg-white rounded-md text-[16px]">
        Explore more
      </button>
    </div>
  );
};

export default ExploreMore;
