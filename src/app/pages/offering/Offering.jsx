import OfferingSlider from "./components/OfferingSlider";

const Offering = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/bg-02.jpg' ) ",
        width: "full",
      }}
      className="bg-fixed py-20 "
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-secondary bg-[#2d3b2b] p-2 rounded-md text-[16px]">
          What are we offering
        </h1>
        <h1 className="text-white text-[20px] md:text-[48px] text-center pb-10">
          Feel real adventure and very <br className="hidden md:block" /> close
          to nature
        </h1>
      </div>
      <div className="py-20">
        <OfferingSlider />
      </div>
    </div>
  );
};

export default Offering;
