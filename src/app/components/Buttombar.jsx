"use client";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { GoInfo } from "react-icons/go";
import { LuContact } from "react-icons/lu";

const Buttombar = () => {
  return (
    <div className="lg:hidden w-full fixed bottom-0 shadow-inner bg-button h-[67px] md:h-[100px] z-[100] bg-white">
      <div className="flex items-center justify-between p-5">
        <Link href="/">
          <div className="grid justify-items-center">
            <IoHomeOutline className="text-[20px] md:text-[35px]" />
            <h1 className="font-bold">Home</h1>
          </div>
        </Link>
        <Link href="/explore">
          <div className="grid justify-items-center">
            <HiOutlineSquaresPlus className="text-[20px] md:text-[35px]" />
            <h1 className="font-bold">Explore</h1>
          </div>
        </Link>
        <Link href="/about">
          <div className="grid justify-items-center">
            <GoInfo className="text-[20px] md:text-[35px]" />
            <h1 className="font-bold">About</h1>
          </div>
        </Link>
        <Link href="/contact">
          <div className="grid justify-items-center">
            <LuContact className="text-[20px] md:text-[35px]" />
            <h1 className="font-bold">Contact Us</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Buttombar;
