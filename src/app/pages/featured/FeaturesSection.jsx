"use client";
import ExploreMore from "@/app/components/ExploreMore";
import FeatureSlider from "./FeatureSlider";

const places = [
  {
    tour: {
      id: 1,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-6.jpg",
      title: "Discovery Island Kayak Tour",
      location: "Main Street, Brooklyn, NY",
      price: "$129.00",
      duration: "3 Days",
      capacity: 10,
    },
  },
  {
    tour: {
      id: 2,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-6.jpg",
      title: "Discovery Island Kayak Tour",
      location: "Main Street, Brooklyn, NY",
      price: "$129.00",
      duration: "3 Days",
      capacity: 10,
    },
  },
  {
    tour: {
      id: 3,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-6.jpg",
      title: "Discovery Island Kayak Tour",
      location: "Main Street, Brooklyn, NY",
      price: "$129.00",
      duration: "3 Days",
      capacity: 10,
    },
  },
  {
    tour: {
      id: 4,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-6.jpg",
      title: "Discovery Island Kayak Tour",
      location: "Main Street, Brooklyn, NY",
      price: "$129.00",
      duration: "3 Days",
      capacity: 10,
    },
  },
];

const FeaturesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h1 className="text-[#63AB45] bg-[#E1EFE0] p-2 rounded-md">
        Featured Tours
      </h1>
      <h1 className="text-[22px] lg:text-[48px] font-bold text-center mt-3 mb-3">
        Amazing tour places around
        <br className="hidden md:block" />
        the world
      </h1>
      <div className="w-full pb-10">
        <FeatureSlider places={places} />
      </div>
      <div>
        <ExploreMore />
      </div>
    </div>
  );
};

export default FeaturesSection;
