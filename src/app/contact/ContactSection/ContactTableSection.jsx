import Heading from "@/app/components/Heading";
import React from "react";

import Logo from "./Logo";
import ContactForm from "./ContactForm";

const ContactTableSection = () => {
  return (
    <div className="flex flex-col md:flex-row pb-20 gap-10 mx-10 lg:mx-20">
      <div className="w-full lg:w-[40%]">
        <Heading
          heading="Contact with us"
          title="Have questions? Feel free to write us"
        />
        <p className=" pt-5 pb-2 text-[20px] ">
          Man braid hell of edison bulb four brunch subway tile authentic,
          chillwave put a bird on church-key ramps heirloom. Set perspiciatis
          unde omnis estenatus voluptatem aperiae.
        </p>
        <Logo />
      </div>
      <div className="w-full lg:w-[60%]">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactTableSection;
