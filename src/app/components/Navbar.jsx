"use client";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
// import { RxHamburgerMenu } from "react-icons/rx";
import ExploreNepal from "../pages/megamenu/components/ExploreNepal";
import ExploreWorld from "../pages/megamenu/components/ExploreWorld";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [navbarBackground, setNavbarBackground] = useState(
    pathname === "/" ? "transparent" : "white"
  );
  const [textColor, setTextColor] = useState(
    pathname === "/" ? "text-white" : "text-black"
  );
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(pathname === "/" ? "31" : "0");
  const [button, setButton] = useState(
    pathname === "/" ? "text-white border-white" : "border-black text-black"
  );

  useEffect(() => {
    const handleScroll = () => {
      const changeBackground = window.scrollY > 0;
      if (changeBackground) {
        setNavbarBackground("white");
        setTextColor("text-black");
        setTop(0);
        setButton(" text-black border-black");
      } else {
        setNavbarBackground(pathname === "/" ? "transparent" : "white");
        setTextColor(pathname === "/" ? "text-white" : "text-black");
        setTop(31);
        setButton("border-white text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleClick = () => {
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
    <div
      className={`z-[999] ${
        pathname === "/"
          ? `fixed top-${top} w-full text-${textColor} bg-${navbarBackground} border-b`
          : `sticky top-0 bg-${navbarBackground}`
      }`}
    >
      <div className="flex items-center justify-between px-[30px] md:px-[60px] p-4 text-[16px] z-[999]">
        <div className="w-[8rem]">
          <img
            src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/logo.png"
            alt="logo"
          />
        </div>
        <div className="hidden lg:flex items-center space-x-6 cursor-pointer text-[12px] lg:text-[16px] relative">
          <div className={`flex items-center gap-1 ${textColor}`}>
            <Link href="/">
              <h1>Home</h1>
            </Link>
          </div>
          <div
            className={`flex items-center gap-1 ${textColor}`}
            onMouseEnter={() => handleHover("exploreNepal")}
          >
            <h1>Explore Nepal</h1>
            <IoIosArrowDown />
          </div>
          <div
            className={`flex items-center gap-1 ${textColor}`}
            onMouseEnter={() => handleHover("exploreWorld")}
          >
            <h1>Explore World</h1>
            <IoIosArrowDown />
          </div>
          <div className={`flex items-center gap-1 ${textColor}`}>
            <Link href="about">
              <h1>About Us</h1>
            </Link>
          </div>
          <div className={`flex items-center gap-1 ${textColor}`}>
            <Link href="contact">
              <h1>Contact</h1>
            </Link>
          </div>
          <div className=" flex space-x-2">
            <div className="flex items-center bg-brand p-2 text-white rounded-md gap-1">
              <IoLogoWhatsapp className="text-white" />
              <button className="">WhatsApp</button>
            </div>
            <button
              className={`border ${
                pathname === "/" ? `text-${button}` : ``
              } rounded-md p-2`}
            >
              Book Now
            </button>
          </div>
        </div>
        {/* sidebar */}
        {/* <Sidebar open={open} setOpen={setOpen} />
        <div className="lg:hidden">
          <RxHamburgerMenu onClick={handleClick} />
        </div> */}
      </div>
      {renderSubMenu()}
    </div>
  );
};

export default Navbar;
