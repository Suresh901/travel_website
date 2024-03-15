"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ExploreMore from "../components/ExploreMore";
import ExploreUs from "./component/ExploreUs";
import Dropdown from "./component/Dropdown";

const Nepal = [
  {
    id: 1,
    place: "Trekking",
    list: [
      {
        id: 1,
        place: "Annapurna Circuit Trek",
        desc: "The Annapurna Circuit Trek is one of the most popular trekking routes in Nepal, offering stunning views of the Annapurna and Dhaulagiri mountain ranges. It takes you through diverse landscapes, including lush forests, traditional villages, and high mountain passes.",
      },
      {
        id: 2,
        place: "Everest Base Camp Trek",
        desc: "The Everest Base Camp Trek is a classic trekking adventure that takes you to the base of the world's highest peak, Mount Everest. Along the way, you'll pass through Sherpa villages, Buddhist monasteries, and breathtaking Himalayan scenery.",
      },
      {
        id: 3,
        place: "Langtang Valley Trek",
        desc: "The Langtang Valley Trek is a less crowded trekking route, offering a glimpse into the unique culture and landscapes of the Langtang region. You'll trek through rhododendron forests, alpine meadows, and picturesque Tibetan villages.",
      },
      {
        id: 4,
        place: "Manaslu Circuit Trek",
        desc: "The Manaslu Circuit Trek is a remote and challenging trekking route that circles the eighth highest mountain in the world, Mount Manaslu. It offers stunning views of the Himalayas, diverse flora and fauna, and encounters with local Tibetan communities.",
      },
    ],
    desc: "cultural heritage palce",
  },
  {
    id: 2,
    place: "Bunjee Jump",
    desc: "cultural heritage palce",
  },
  {
    id: 3,
    place: "Camping",
    desc: "cultural heritage palce",
  },
  {
    id: 4,
    place: "Hiking",
    desc: "cultural heritage palce",
  },
];
const country = [
  {
    id: 1,
    place: "Thailand",
    list: [
      {
        id: 1,
        place: "Bankok",
      },
      {
        id: 2,
        place: "Pataya",
      },
    ],
    desc: "Beautiful place",
  },
  {
    id: 2,
    place: "India",
    desc: "Beautiful place",
  },
  {
    id: 3,
    place: "Europe",
    desc: "Beautiful place",
  },
  {
    id: 4,
    place: "Africa",
    desc: "Beautiful place",
  },
];

const page = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  //   const [subItem, setSubItem] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const toggleOpen = () => {
    setOpen(!open);
  };
  const toggleOpen1 = () => {
    setOpen1(!open1);
  };

  //   const toggleSubItem = () => {
  //     setSubItem(!subItem);
  //   };
  const toggleSubItem = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div
      className="pt-10"
      style={{
        backgroundImage:
          "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/bg-shape-04.png')",
      }}
    >
      <ExploreUs />

      <h1 className="text-2xl font-bold flex items-center justify-center pb-10">
        Explore Our Services
      </h1>
      <Dropdown
        data={Nepal}
        toggleOpen={toggleOpen}
        toggleSubItem={toggleSubItem}
        selectedId={selectedId}
        open={open}
        setOpen={setOpen}
        label="Nepal"
      />

      <Dropdown
        label="world"
        data={country}
        toggleOpen={toggleOpen1}
        toggleSubItem={toggleSubItem}
        selectedId={selectedId}
        open={open1}
        setOpen={setOpen1}
      />
    </div>
  );
};

export default page;
