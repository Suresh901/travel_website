import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const trek = [
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
];

const bunjee = [
  {
    id: 1,
    place: "The Last Resort Bungee",
    desc: "The Last Resort Bungee is one of the most thrilling bungee jumping experiences in Nepal, situated close to the Tibetan border. It offers a 160-meter freefall into the Bhote Koshi River gorge, surrounded by stunning natural beauty.",
  },
  {
    id: 2,
    place: "Pokhara Bungee Jump",
    desc: "The Pokhara Bungee Jump is located near the beautiful city of Pokhara, offering a 70-meter plunge into the tropical gorge of the Seti River. It provides breathtaking views of the Annapurna and Machhapuchhre mountains.",
  },
  {
    id: 3,
    place: "Highground Bungee",
    desc: "Highground Bungee is another exciting bungee jumping spot in Nepal, located near the Tibetan border in the scenic village of Kushma. It offers a 70-meter drop from a suspension bridge over the Kali Gandaki River.",
  },
];

const thailand = [
  {
    id: 1,
    activity: "Trekking in Chiang Mai",
    desc: "Chiang Mai offers fantastic trekking opportunities, with lush jungles, waterfalls, and hill tribe villages to explore. You can trek to Doi Inthanon, Thailand's highest peak, or visit the famous Doi Suthep temple.",
  },
  {
    id: 2,
    activity: "Trekking in Khao Sok National Park",
    desc: "Khao Sok National Park is home to one of the oldest rainforests in the world, with limestone cliffs, hidden lakes, and diverse wildlife. You can embark on multi-day treks, stay in floating bungalows, and spot exotic animals.",
  },
  {
    id: 3,
    activity: "Bungee Jumping in Pattaya",
    desc: "Pattaya offers exhilarating bungee jumping experiences, with jumps available from various heights and platforms. You can leap from the Pattaya Bungy Jump tower and enjoy panoramic views of the city and coastline.",
  },
  {
    id: 4,
    activity: "Bungee Jumping in Phuket",
    desc: "Phuket is another popular destination for bungee jumping in Thailand, with jumps available from a platform over a lagoon. You can experience the thrill of freefalling while surrounded by stunning tropical scenery.",
  },
];

export const Trek = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-brand uppercase text-sm">Explore Nepal</h1>
      <div className="grid grid-cols-4 gap-10">
        {trek.map((item) => (
          <div className="h-auto w-full ">
            <div className=" ">
              <div className="flex flex-col">
                <h1 className="font-bold pb-2 cursor-pointer">{item.place}</h1>
                <h1>{item.desc}</h1>
              </div>
            </div>
            {/* <img src="" alt="" /> */}
          </div>
        ))}
      </div>

      {/* <div className="flex items-center gap-2 text-[#0B6392]">
        <hr className="h-10 w-1 bg-[#3EB049]" />
        See all places
        <MdKeyboardDoubleArrowRight className="text-[#25A6DC]" />
      </div> */}
    </div>
  );
};

export const Bunjee = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-brand uppercase text-sm">Explore Nepal</h1>
      <div className="grid grid-cols-4 gap-10">
        {bunjee.map((item) => (
          <div className="h-auto w-full ">
            <div className=" ">
              <div className="flex flex-col">
                <h1 className="font-bold pb-2 cursor-pointer">{item.place}</h1>
                <h1>{item.desc}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export const ThailandComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-brand uppercase text-sm">Explore Nepal</h1>
      <div className="grid grid-cols-4 gap-10">
        {thailand.map((item) => (
          <div className="h-auto w-full ">
            <div className=" ">
              <div className="flex flex-col">
                <h1 className="font-bold pb-2">{item.activity}</h1>
                <h1>{item.desc}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
