import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = () => {
  const faqsData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How do I install React?",
      answer:
        "You can install React using npm or yarn by running: npm install react",
    },
    {
      question: "How do I install React?",
      answer:
        "You can install React using npm or yarn by running: npm install react",
    },
  ];

  const [faqs, setFaqs] = useState(
    faqsData.map((faq) => ({ ...faq, isOpen: false }))
  );

  const toggleFAQ = (index) => {
    console.log("Clicked index:", index);
    const newFaqs = faqs.map((faq, i) =>
      index === i ? { ...faq, isOpen: !faq.isOpen } : faq
    );
    console.log("New FAQs:", newFaqs);
    setFaqs(newFaqs);
  };
  return (
    <div className="pt-5">
      <h2 className="text-[18px] md:text-[24px] font-[600] text-center">
        Frequently Asked Questions by Travelers
        <div className="w-20 h-[2px] bg-primary m-auto"></div>
      </h2>
      <div className="mt-8 max-w-[800px] m-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mt-5 p-4 border-2 shadow-lg bg-white rounded-xl"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3
                className={`${
                  faq.isOpen ? "text-primary" : ""
                } sm:text-[20px] text-[14px] font-[700]`}
              >
                {faq.question}
              </h3>
              <span>
                {faq.isOpen ? (
                  <IoIosArrowUp className="text-[20px]" />
                ) : (
                  <IoIosArrowDown className="text-[20px]" />
                )}
              </span>
            </div>
            <p
              className={`faq-answer overflow-hidden transition-all duration-100 text-[14px] sm:text-[16px] ${
                faq.isOpen ? "max-h-20 pt-2" : "h-0 py-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
