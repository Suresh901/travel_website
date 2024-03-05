"use client"
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (

        <div
            className="sticky top-0 flex items-center justify-between px-[30px] md:px-[60px] p-4 text-[16px] z-[999] bg-white"
        // className={`sticky top-0 flex items-center justify-between px-[30px] md:px-[60px] p-4 text-[16px] z-[999]  ${isScrolled
        //     ? "md:bg-[#121212] bg-opacity-100 "
        //     : "bg-transparent"
        //     } text-white`}
        >
            <div className="w-[8rem]">
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/logo.png" alt="logo" />
            </div>
            <div className="hidden lg:flex items-center space-x-6 cursor-pointer">
                <div className="flex items-center gap-1">
                    <h1>Home</h1>
                    <IoIosArrowDown />
                </div>
                <div className="flex items-center gap-1">
                    <h1>Explore Nepal</h1>
                    <IoIosArrowDown />
                </div>
                <div className="flex items-center gap-1">
                    <h1>Explore World</h1>
                    <IoIosArrowDown />
                </div>
                <div className="flex items-center gap-1">
                    <h1>About Us</h1>
                    <IoIosArrowDown />
                </div>
                <div className="flex items-center gap-1">
                    <h1>Contact</h1>
                    <IoIosArrowDown />
                </div>
                <div className=" flex space-x-2">
                    <div className="flex items-center bg-[#25d366] p-2 text-white rounded-md gap-1">
                        <IoLogoWhatsapp className="text-white" />
                        <button className="">WhatsApp</button>
                    </div>
                    <button className="border border-black-900 rounded-md p-2 hover:bg-[#25d366] hover:text-white">Book Now</button>
                </div>
            </div>
            <div className="lg:hidden">
                <RxHamburgerMenu />
            </div>
        </div>
    )
}

export default Navbar