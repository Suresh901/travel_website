import { FaHelmetSafety } from "react-icons/fa6";
import { MdPriceCheck } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";

const ChooseUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center pb-10">
      <div
        className="w-full lg:w-1/2 h-[810px]"
        style={{
          backgroundImage:
            "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-5.jpg')",
          backgroundPosition: "right center",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          height: "full",
        }}
      ></div>
      <div
        className="w-full lg:w-1/2 h-[810px] p-5 md:p-10"
        style={{
          backgroundImage:
            "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/bg-shape-07.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="flex flex-col items-start  pt-28  ">
          <h1 className="text-[#63AB45] bg-[#E1EFE0] p-2 rounded-md w-[150px]">
            Why choose us
          </h1>
          <h1 className="text-[22px] lg:text-[40px] ">
            Great opportunity for adventure & travels
          </h1>
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="flex items-center gap-5 py-3">
            <div>
              <div className="rounded-md text-white bg-brand w-24 h-24 flex items-center justify-center">
                <FaHelmetSafety size={50} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[20px]">Safety first always</h1>
              <h1>
                Aenean placerat ut lacus nec pulvinar. Donec eu, ante at,
                commodo diam.
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-5 py-3">
            <div>
              <div className="rounded-md text-white bg-brand size-24 flex items-center justify-center">
                <MdPriceCheck className="size-10" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[20px]">Low price & friendly</h1>
              <h1>
                Aenean placerat ut lacus nec pulvinar. Donec eu, ante at,
                commodo diam.
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-5 py-3">
            <div>
              <div className="rounded-md text-white bg-brand w-24 h-24 flex items-center justify-center ">
                <PiAirplaneTiltFill size={50} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[20px]">Trusted travel guide</h1>
              <h1>
                Aenean placerat ut lacus nec pulvinar. Donec eu, ante at,
                commodo diam.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
