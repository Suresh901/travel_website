import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ACard from "./ACard";

const data = [
  {
    image: "",
    label: "Tent Camping",
    desc: "Sit amet consectetur integer tincidunt sceleries noda lesry volutpat neque",
  },
  {
    image: "",
    label: "Mountain Biking",
    desc: "Sit amet consectetur integer tincidunt sceleries noda lesry volutpat neque",
  },
  {
    image: "",
    label: "Fishing & Boating",
    desc: "Sit amet consectetur integer tincidunt sceleries noda lesry volutpat neque",
  },
  {
    image: "",
    label: "Adventure Climbing",
    desc: "Sit amet consectetur integer tincidunt sceleries noda lesry volutpat neque",
  },
];

const Availability = () => {
  return (
    <div
      className="bg-full bg-center w-full lg:relative"
      style={{
        backgroundImage:
          "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/bg-shape-01.png')",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-20 p-5 ">
        <div className="w-full lg:w-1/2 p-5 lg:p-20">
          <Heading
            heading="Availability"
            title="Explore GoWilds Real Adventure & Travels"
          />
          <p className="pt-5">
            Sit amet consectetur integer tincidunt sceleries noda lesry volutpat
            neque fermentum malesuada scelequecy leocras odio blandit rhoncus
            eues feugiat.
          </p>

          <div className="flex items-center gap-5 py-3">
            <div className="bg-[#414643] rounded-full text-brand w-[50px] h-[50px] flex items-center justify-center">
              <FaLocationDot />
            </div>
            <div>
              <h1 className="font-bold">Protect your life</h1>
              <h1 className="text-text">
                We're here for look even you from start to finish.
              </h1>
            </div>
          </div>

          <div className="flex  items-center gap-7 py-3">
            <div className="bg-[#414643] rounded-full text-brand w-[50px] h-[50px] flex items-center justify-center">
              <FaPhoneAlt />
            </div>
            <div>
              <h1>Call experts</h1>
              <h1 className="font-bold">+92 (03) 68-090</h1>
            </div>
            <div className="hidden lg:block">
              <Button label="Discover More" />
            </div>
          </div>
          <div className="lg:hidden">
            <Button label="Discover More" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:absolute lg:top-[90px] lg:right-[55px] z-10 ">
          <div className="grid grid-cols-2 gap-8 drop-shadow-lg">
            {data.map((item, index) => {
              // Add custom classes to the first and last items
              let customClass = "";
              if (index === 0) {
                customClass = "mt-20"; // Adjust this value as needed
              } else if (index === data.length - 1) {
                customClass = "mt-[-80px]"; // Adjust this value as needed
              }

              return (
                <div key={index} className={` ${customClass}`}>
                  <ACard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;
