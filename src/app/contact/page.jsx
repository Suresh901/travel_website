import React from "react";
import HeroSection from "./ContactSection/HeroSection";
import ContactUs from "./ContactSection/ContactUs";
import ContactTableSection from "./ContactSection/ContactTableSection";
import Map from "./ContactSection/Map";
import ExploreMore from "../components/ExploreMore";

const page = () => {
  return (
    <div>
      <HeroSection />
      <ContactUs />
      <ContactTableSection />
      <div className="mx-10 flex justify-center">
        <ExploreMore />
      </div>
      <Map />
    </div>
  );
};

export default page;
