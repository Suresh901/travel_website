import CircularProgress from "@/app/pages/welcome/components/CircularProgress";

const Opportunities = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-5 lg:mx-10 gap-5 lg:gap-20 ">
      <div className=" flex items-center justify-center pt-5 lg:p-20">
        <img
          src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/image-07.jpg"
          alt="img"
          className="rounded-tl-full rounded-tr-full"
        />
      </div>

      <div className="md:pt-20 lg:pt-40">
        <div>
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <h1 className="text-brand bg-[#E1EFE0] p-2 rounded-md text-[16px] font-semibold w-auto ">
              Who we are
            </h1>
          </div>
          <h1 className="pt-5 font-bold text-[20px] sm:text-[25px] md:text-[30px] lg:text-[48px]">
            Great opportunity for adventure & travels
          </h1>

          <p className=" pt-2 lg:pt-5 text-[14px] lg:text-[18px]">
            Sit amet consectetur velit integer tincidunt sceleries nodalesry
            volutpat neque fermentum malesuada sceleris quecy massa lacus
            ultrices eget leo cras odio blandit rhoncus eues feugiat.
          </p>
        </div>
        <div className="bg-white drop-shadow-xl w-[Fill (611px)] h-[Hug (246.8px)] p-10 flex justify-around rounded-md">
          <div className="border-r w-1/2">
            <CircularProgress label="Satisfied Clients" value={50} />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <CircularProgress label="Success Rate" value={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
