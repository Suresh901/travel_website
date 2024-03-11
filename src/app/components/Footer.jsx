"use client";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const Footer = () => {
  const [input, setInput] = useState("");

  return (
    <div className="bg-hf text-white pt-20 text-[14px]">
      <div className=" px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-[#343935] pb-10 gap-5 lg:gap-0 ">
          <div className="flex items-center justify-between w-full lg:w-1/2 px-10">
            <div className="flex items-center gap-5">
              <img
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/icon-headphone.png"
                alt=""
                className="w-[80px] h-[80px]"
              />
              <h1>Need any support for tour & travels ?</h1>
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-brand shadow-md shadow-brand"></div>
          </div>

          <div className="flex items-center justify-between w-full lg:w-1/2 px-10">
            <div className="flex items-center gap-5">
              <img
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/icon-travel.png"
                alt=""
                className="w-[80px] h-[80px]"
              />
              <h1>Ready to Get Started With Vacations!</h1>
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-secondary shadow-md shadow-secondary"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row py-10 gap-10 mx-5 md:mx-0">
          <div className="md:w-1/3 flex flex-col gap-5">
            <img
              src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/logo-white.png"
              alt=""
              className="h-[35.14px] w-[145px]"
            />
            <h1>
              To take trivial example which us ever undertakes laborious physica
              exercise except obsome.
            </h1>
            <div className="flex items-center space-x-2 md:space-x-4 p-2">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaPinterest />
            </div>
          </div>
          <div className="md:w-1/6 flex flex-col gap-2">
            <h1 className="font-bold">Pages</h1>
            <h1>About us</h1>
            <h1>Community</h1>
            <h1>blog</h1>
            <h1>Work with us</h1>
            <h1>Privacy policy</h1>
            <h1>Contact us</h1>
          </div>

          <div className="flex flex-col md:w-1/3 gap-5">
            <div className="flex gap-4">
              <h1>Newsletter</h1>
              <img
                src="https://gaviaspreview.com/wp/gowilds/wp-content/themes/gowilds/assets/images/arrow.png"
                alt=""
                className="h-[26px] w-[18px] mt-2"
              />
            </div>
            <h1>Subscribe our newsletter to get our latest update & news.</h1>
            <div className="flex">
              <div className="bg-white p-3 rounded-tl-md rounded-bl-md ">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="outline-none text-black"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
              </div>
              <button className="bg-brand rounded-tr-md rounded-br-md px-2">
                <FaTelegramPlane size={20} />
              </button>
            </div>

            <div className="flex items-center gap-5">
              <IoMdCheckmarkCircleOutline />
              <h1>I agree to all terms and policies</h1>
            </div>
          </div>

          <div className="md:w-1/4">
            <h1 className="font-bold">Contact</h1>

            <div className="flex items-center gap-5 py-3">
              <div className="bg-[#414643] rounded-full text-brand w-8 h-8 flex items-center justify-center">
                <FaPhoneAlt />
              </div>
              <div>
                <h1>Drop a Line</h1>
                <h1>+00 (123) 456 889</h1>
              </div>
            </div>
            <div className="flex items-center gap-5 py-3">
              <div className="bg-[#414643] rounded-full text-brand w-8 h-8 flex items-center justify-center">
                <MdEmail />
              </div>
              <div>
                <h1>Email Address</h1>
                <h1>contact@example.com</h1>
              </div>
            </div>
            <div className="flex items-center gap-5 py-3">
              <div className="bg-[#414643] rounded-full text-brand w-8 h-8 flex items-center justify-center">
                <FaLocationDot />
              </div>
              <div>
                <h1>Visit office</h1>
                <h1>583 Main Street, NY, USA</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#101311] p-2 flex items-center justify-center">
        © 2023 Copyrights by Gowilds. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
