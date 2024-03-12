import React, { useState } from "react";
import clsx from "clsx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp, IoLogoWhatsapp } from "react-icons/io";
import Menu from "../pages/sidebar/Menu";

const Nepal = [
  {
    id: 1,
    place: "Trekking",
    list: [
      {
        id: 1,
        place: "Annapurna Circuit Trek",
        desc: "The Annapurna Circuit Trek is one of the most popular trekking routes in Nepal, offering stunning views of the Annapurna and Dhaulagiri mountain ranges. It takes you through diverse landscapes, including lush forests, traditional villages, and high mountain passes.",
      },
      {
        id: 2,
        place: "Everest Base Camp Trek",
        desc: "The Everest Base Camp Trek is a classic trekking adventure that takes you to the base of the world's highest peak, Mount Everest. Along the way, you'll pass through Sherpa villages, Buddhist monasteries, and breathtaking Himalayan scenery.",
      },
      {
        id: 3,
        place: "Langtang Valley Trek",
        desc: "The Langtang Valley Trek is a less crowded trekking route, offering a glimpse into the unique culture and landscapes of the Langtang region. You'll trek through rhododendron forests, alpine meadows, and picturesque Tibetan villages.",
      },
      {
        id: 4,
        place: "Manaslu Circuit Trek",
        desc: "The Manaslu Circuit Trek is a remote and challenging trekking route that circles the eighth highest mountain in the world, Mount Manaslu. It offers stunning views of the Himalayas, diverse flora and fauna, and encounters with local Tibetan communities.",
      },
    ],
    desc: "cultural heritage palce",
  },
  {
    id: 2,
    place: "Bunjee Jump",
    desc: "cultural heritage palce",
  },
  {
    id: 3,
    place: "Camping",
    desc: "cultural heritage palce",
  },
  {
    id: 4,
    place: "Hiking",
    desc: "cultural heritage palce",
  },
];
const country = [
  {
    id: 1,
    place: "Thailand",
    desc: "Beautiful place",
  },
  {
    id: 2,
    place: "India",
    desc: "Beautiful place",
  },
  {
    id: 3,
    place: "Europe",
    desc: "Beautiful place",
  },
  {
    id: 4,
    place: "Africa",
    desc: "Beautiful place",
  },
];
// const trek = [
//   {
//     id: 1,
//     place: "Annapurna Circuit Trek",
//     desc: "The Annapurna Circuit Trek is one of the most popular trekking routes in Nepal, offering stunning views of the Annapurna and Dhaulagiri mountain ranges. It takes you through diverse landscapes, including lush forests, traditional villages, and high mountain passes.",
//   },
//   {
//     id: 2,
//     place: "Everest Base Camp Trek",
//     desc: "The Everest Base Camp Trek is a classic trekking adventure that takes you to the base of the world's highest peak, Mount Everest. Along the way, you'll pass through Sherpa villages, Buddhist monasteries, and breathtaking Himalayan scenery.",
//   },
//   {
//     id: 3,
//     place: "Langtang Valley Trek",
//     desc: "The Langtang Valley Trek is a less crowded trekking route, offering a glimpse into the unique culture and landscapes of the Langtang region. You'll trek through rhododendron forests, alpine meadows, and picturesque Tibetan villages.",
//   },
//   {
//     id: 4,
//     place: "Manaslu Circuit Trek",
//     desc: "The Manaslu Circuit Trek is a remote and challenging trekking route that circles the eighth highest mountain in the world, Mount Manaslu. It offers stunning views of the Himalayas, diverse flora and fauna, and encounters with local Tibetan communities.",
//   },
// ];

const Sidebar = ({ open, setOpen }) => {
  const handleCloseSidebar = () => {
    setOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <div
      className={clsx(
        " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
        open && "translate-x-0"
      )}
      // onClick={handleCloseSidebar}
    >
      <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen z-50 w-[45%] flex">
        <div className="bg-[#f3f8f6] flex items-center justify-between p-2 px-5">
          <div className="w-20 flex ">
            <img
              src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/logo.png"
              alt=""
            />
          </div>

          <IoCloseOutline
            onClick={() => setOpen(false)}
            className="text-2xl cursor-pointer bg-brand text-white"
          />
        </div>

        <div className="p-5 flex flex-col gap-4">
          <div className="border-b pb-1">
            <Link href="/">
              <h1 className="px-2" onClick={(e) => setOpen(false)}>
                Home
              </h1>
            </Link>
          </div>
          {/* explore nepal section */}
          <div
            className="border-b flex flex-col items-start justify-between pb-1"
            onClick={toggleDropdown}
          >
            <div className="flex justify-between w-full">
              <h1 className="px-2">Explore Nepal</h1>
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isOpen && (
              <div className="px-5 w-full">
                <ul>
                  <Menu label={Nepal} />
                </ul>
              </div>
            )}
          </div>

          {/* explore world section */}
          <div
            className="border-b flex flex-col items-start justify-between pb-1"
            onClick={toggleDropdown1}
          >
            <div className="flex justify-between w-full">
              <h1 className="px-2">Explore World</h1>
              {isOpen1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isOpen1 && (
              <div className="px-5 w-full">
                <ul>
                  <Menu label={country} />
                </ul>
              </div>
            )}
          </div>
          <div className="border-b pb-1">
            <Link href="/about">
              <h1 className="px-2" onClick={(e) => setOpen(false)}>
                About
              </h1>
            </Link>
          </div>
          <div className="border-b pb-1">
            <Link href="/contact">
              <h1 className="px-2" onClick={(e) => setOpen(false)}>
                Contact
              </h1>
            </Link>
          </div>

          <div className="flex items-center justify-center bg-brand p-2 text-white rounded-md gap-1">
            <IoLogoWhatsapp className="text-white" />
            <button className="">WhatsApp</button>
          </div>
          <button className="bg-[#48bf53] rounded-md p-2  text-white">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
