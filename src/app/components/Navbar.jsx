"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import ExploreNepal from "../pages/megamenu/components/ExploreNepal";
import ExploreWorld from "../pages/megamenu/components/ExploreWorld";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(!open);
  };

  const handleHover = (menu) => {
    setHoveredItem(menu);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const renderSubMenu = () => {
    // Render submenu based on hoveredItem state
    switch (hoveredItem) {
      case "exploreNepal":
        return (
          <div
            className="absolute top-full left-0"
            onMouseLeave={handleMouseLeave}
          >
            <ExploreNepal />
          </div>
        );
      case "exploreWorld":
        return (
          <div
            className="absolute top-full left-0"
            onMouseLeave={handleMouseLeave}
          >
            <ExploreWorld />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" sticky top-0 z-[999]">
      <div className="flex items-center justify-between px-[30px] md:px-[60px] p-4 text-[16px] z-[999] bg-white">
        <div className="w-[8rem]">
          <img
            src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/logo.png"
            alt="logo"
          />
        </div>
        <div className="hidden lg:flex items-center space-x-6 cursor-pointer text-[12px] lg:text-[16px] relative">
          <div className="flex items-center gap-1">
            <Link href="/">
              <h1>Home</h1>
            </Link>
          </div>
          <div
            className="flex items-center gap-1"
            onMouseEnter={() => handleHover("exploreNepal")}
          >
            <h1>Explore Nepal</h1>
            <IoIosArrowDown />
          </div>
          <div
            className="flex items-center gap-1"
            onMouseEnter={() => handleHover("exploreWorld")}
          >
            <h1>Explore World</h1>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center gap-1">
            <Link href="about">
              <h1>About Us</h1>
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Link href="contact">
              <h1>Contact</h1>
            </Link>
          </div>
          <div className=" flex space-x-2">
            <div className="flex items-center bg-brand p-2 text-white rounded-md gap-1">
              <IoLogoWhatsapp className="text-white" />
              <button className="">WhatsApp</button>
            </div>
            <button className="bg-[#48bf53] rounded-md p-2  text-white">
              Book Now
            </button>
          </div>
        </div>
        {/* sidebar */}
        <Sidebar open={open} setOpen={setOpen} />
        <div className="lg:hidden">
          <RxHamburgerMenu onClick={handleClick} />
        </div>
      </div>
      {renderSubMenu()}
    </div>
  );
};

export default Navbar;
