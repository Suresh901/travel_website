import React from "react";
import HeroSection from "./AboutSection/HeroSection";
import Availability from "./AboutSection/Availability";
import CheckAvailability from "./AboutSection/CheckAvailability";
import Opportunities from "./AboutSection/Opportunities";
import Team from "./AboutSection/Team";
import Opportunity from "./AboutSection/Opportunity";
import Ready from "./AboutSection/Ready";
import Quality from "./AboutSection/Quality";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Availability />
      <CheckAvailability />
      <Opportunities />
      <Team />
      <Opportunity />
      <Ready />
      <Quality />
    </div>
  );
};

export default page;
