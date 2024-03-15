import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Accordion = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [activeBorder, setActiveBorder] = useState(null);

  const toggleItem = (index) => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === index ? null : index
    );
  };
  const toggleBorder = (index) => {
    setActiveBorder(activeBorder === index ? null : index);
  };
  const handleClick = (index) => {
    toggleItem(index);
    toggleBorder(index);
  };

  const faqData = [
    {
      question: "How Much Price About Tour & Travels",
      answer:
        "Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl sit placerat neque amet sapien semper tempus.",
    },
    {
      question: "We’re giving all the best services to you",
      answer:
        "Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl sit placerat neque amet sapien semper tempus.",
    },
    {
      question: "Best Experience Travel Agency",
      answer:
        "Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl sit placerat neque amet sapien semper tempus.",
    },
  ];

  return (
    <div className="w-full">
      <div className="px-2 md:px-10">
        <div>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-5 mb-4 ${
                activeBorder === index ? "border-l-4 border-brand" : ""
              } duration-500`}
            >
              <div
                className="flex cursor-pointer items-center justify-between gap-10 "
                onClick={() => handleClick(index)}
              >
                <h1 className="text-sm md:text-[18px]">{item.question}</h1>
                <div
                  className={`transform transition-transform ${
                    activeItem === index
                      ? "rotate-[90deg] duration-500 bg-brand rounded-full text-white "
                      : "bg-[#f3f8f6] rounded-full"
                  }`}
                >
                  <IoIosArrowForward size={25} />
                </div>
              </div>

              <div
                className={`transition-max-height mt-2 overflow-hidden ${
                  activeItem === index
                    ? "max-h-[1000px] duration-700 ease-in-out"
                    : "max-h-0 duration-500 ease-in-out"
                } ${
                  activeBorder === index
                    ? "duration-5000 ease-in  transition "
                    : "duration-5000 ease-out transition "
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
