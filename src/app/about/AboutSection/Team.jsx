import Heading from "@/app/components/Heading";
import React from "react";
import TeamSlider from "./TeamSlider";

const Team = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/bg-shape-10.png' ) ",
        width: "full",
      }}
      className="pb-10"
    >
      <div className="flex flex-col items-center justify-center pt-20 ">
        <Heading
          heading="Team Members"
          title={`We’ve Expert Team\nMembers Meet With Team`}
          className1=" text-center"
        />
      </div>
      <div>
        <TeamSlider />
      </div>
    </div>
  );
};

export default Team;
