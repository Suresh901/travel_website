import Heading from "@/app/components/Heading";
import React from "react";
import Card from "./Card";

const contactDetail = [
  {
    id: 1,
    logo: "",
    label: "Office Location",
    label1: "55 Main Street",
    label2: "2nd Floor New York",
  },
  {
    id: 2,
    logo: "",
    label: "Email Address",
    label1: "contact@example.com",
    label2: "info@example.com",
  },
  {
    id: 3,
    logo: "",
    label: "Hotline",
    label1: "+1 (307) 776-0608",
    label2: "666 8888 000",
  },
];

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-10 mx-10">
      <Heading
        heading={"Contact Us"}
        title={"Ready to Get our best Services! Feel free to contact with us"}
      />
      <div className="grid grid-cols-1  md:grid-cols-3 gap-10 pb-10 pt-10">
        {contactDetail.map((item, id) => {
          return (
            <div>
              <Card item={item} key={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactUs;
