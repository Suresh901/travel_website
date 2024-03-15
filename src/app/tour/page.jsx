"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoChatbox } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import CardPricing from "./component/CardPricing";
import Faq from "../pages/category/components/Faq";
import TourNav from "./component/TourNav";

const page = () => {
  const mainSlider = useRef(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [showTourNav, setShowTourNav] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Showing scroll Navbar

  useEffect(() => {
    const handleScrollToShowNav = () => {
      const scrollPosition = window.scrollY;
      const showAfterScroll = 680;

      if (scrollPosition > showAfterScroll) {
        setShowTourNav(true);
      } else {
        setShowTourNav(false);
      }
    };

    const handleScroll = () => {
      const sectionIds = [
        "Adventure",
        "Highlights",
        "Overview",
        "Inclusions",
        "Exclude",
        "Camp",
        "Map",
        "video",
        "FAQS",
      ];

      let foundActiveSection = null;

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          foundActiveSection = sectionId;
          break;
        }
      }

      setActiveSection(foundActiveSection);
    };

    // Add an event listener to track scroll
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollToShowNav);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollToShowNav);
    };
  }, []);

  // Redirecting the vertical navbar links to the specific section id
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const images = [
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/f3/dc/85.jpg",
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/c8/74/58.jpg",
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/11/34/36.jpg",
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/93/db/b8.jpg",
  ];

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setMainImageIndex(next),
  };

  const changeMainImage = (index) => {
    setMainImageIndex(index);
    // Move the main Slider to the selected index
    if (mainSlider.current && mainSlider.current.slickGoTo) {
      mainSlider.current.slickGoTo(index);
    }
  };

  // Timeline accordation
  const [faqs, setFaqs] = useState(
    [1, 1, 1, 1, 1, 1, 1].map((faq) => ({ ...faq, isOpen: false }))
  );

  const toggleFAQ = (index) => {
    const newFaqs = faqs.map((faq, i) =>
      index === i ? { ...faq, isOpen: !faq.isOpen } : faq
    );
    setFaqs(newFaqs);
  };

  return (
    <>
      {/* navbar */}
      {showTourNav && (
        <div className="bg-[#f0f0f0] fixed z-10 top-0 w-full">
          <TourNav
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          />
        </div>
      )}
      <div className="lg:max-w-[1250px] w-full m-auto px-3">
        {/* <div className="text-[13px] flex md:flex-row flex-col justify-between py-3">
          <div>Home / Chichen Itza</div>

          <div className="mt-2 sm:mt-0">
            <div className="flex gap-x-1 items-center">
              <BsFillTelephoneFill />
              Book Online or call +1-(702)-648-5873
            </div>
            <div className="flex gap-x-1 items-center">
              <IoChatbox />
              Chat now
            </div>
          </div>
        </div>

        <div className="text-[14px] bg-primary text-white inline-block px-3 py-1 rounded-xl">
          Remove Now & Pay Later
        </div>

        <div>
          <h2 className="md:text-[28px] text-[20px] font-[700] mt-2">
            Chichen Itza, Cenote and Valladolid All-Inclusive Tour
          </h2>
          <Rating value={5} text="16,194 Reviews" />
        </div> */}

        {/* Thumbnail and Image changer */}
        <section className="mt-5 lg:flex justify-between items-start gap-x-5">
          <aside>
            <main className="flex gap-x-2 lg:flex-row flex-col-reverse gap-y-5">
              <div className="md:space-y-4 flex lg:flex-col flex-row items-center gap-x-3">
                {images.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt={`Image ${index}`}
                    onClick={() => changeMainImage(index)}
                    className="lg:w-[150px] lg:h-[90px] w-[50px] h-[50px] border-2 border-black rounded-xl"
                  />
                ))}
              </div>

              <div className="xl:max-w-[650px] lg:max-w-[900px] md:w-[700px] sm:w-[400px] w-[340px] m-auto pr-5 pl-1">
                <Slider
                  ref={mainSlider}
                  {...mainSliderSettings}
                  initialSlide={mainImageIndex}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-xl overflow-hidden w-full"
                    >
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="w-full h-[425px]"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </main>

            <div>
              {/* Card for pricing */}
              <div className="xl:hidden block">
                <CardPricing />
              </div>
            </div>

            {/* Tours page contents */}
            <section
              className="md:mt-10 mt-5 md:max-w-[765px] w-full space-y-8"
              id="Adventure"
            >
              <main>
                <h2 className="md:text-[28px] text-[18px] font-[600]">
                  Nepal Multi Sports Adventure - 11 Days
                </h2>
                <p className="mt-2 md:text-[16px] text-[14px]">
                  Nepal is adventure haven. Take this trip and fuel your
                  adrenaline rush with activities like bungy jumping, hiking,
                  white-water rafting, paragliding, mountain biking and wildlife
                  safari.
                </p>
              </main>

              <main className="grid grid-cols-3 gap-y-5 p-5 bg-[#EAF1FF] shadow-custom">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                  <div className="flex items-center gap-x-2" key={index}>
                    <span>
                      <CiGlobe className="md:text-[35px] text-[25px]" />
                    </span>
                    <span>
                      <p className="md:text-[14px] text-[12px]">Country</p>
                      <p className="md:text-[16px] text-[14px]">Nepal</p>
                    </span>
                  </div>
                ))}
              </main>

              {/* Trip Highlights */}
              <main className="mt-10" id="Highlights">
                <h2 className="text-[24px] font-[500]">Trip Highlights</h2>
                {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                  <div
                    className="flex sm:items-center gap-x-1 pt-3"
                    key={index}
                  >
                    <IoArrowForwardCircleOutline className="text-primary text-[24px]" />
                    <div className="flex sm:items-center sm:flex-row flex-col gap-x-1">
                      <p className="text-[15px] font-[700] sm:font-normal">
                        Guided sightseeing in
                      </p>
                      <span className="sm:font-[700] text-[12px] sm:text-[16px]">
                        Pashupatinath Temple, Boudhanath, Bhaktapur Durbar
                        Square.
                      </span>
                    </div>
                  </div>
                ))}
              </main>

              {/* Trip Overview */}
              <main id="Overview">
                <h2 className="text-[24px] font-[500]">Trip Overview</h2>
                <div className="space-y-3 mt-3 sm:text-[16px] text-[14px]">
                  <p>
                    <span className="font-[700]">Nepal&nbsp;</span>is an
                    adventure haven. With its towering peaks, and diverse flora
                    and fauna, the nation presents the ideal opportunity for an
                    adventurous trip. Experience the thrill of bungee jumping,
                    hiking, white-water rafting, paragliding, mountain biking,
                    and wildlife safaris in Nepal on this trip.
                  </p>
                  <p>
                    Your adventure begins from <span>Kathmandu&nbsb;</span>with
                    a sightseeing tour of the city’s prime cultural heritage
                    Sites. After exploring the UNESCO World Heritage Sites, you
                    head down to the Himalayan river of Trishuli. In Trishuli
                    you’ll spend an exciting day rafting on its fast-flowing
                    rapids. More excitement awaits you after your wet and wild
                    adventure in Trishuli.
                  </p>
                  <p>
                    Make your way to{" "}
                    <span className="font-[700]">Pokhara&nbsp;</span>
                    and take to the skies. Paraglide and feel the freedom of the
                    birds. Enjoy a bird’s-eye view of Pokhara city. Along with
                    Phewa Lake set in the middle like a sapphire from high above
                    the sky. Hike up to the hilltop viewpoint of{" "}
                    <span className="font-[700]">Sarangkot&nbsp;</span>for
                    inspiring views of Himalayan peaks (Annapurna Range,
                    Dhaulagiri, and Machhapuchhre). Enjoy a magical sunrise from
                    a vantage point. Watch the dawn breaking over snow-capped
                    peaks, splashing the white mountains in hues of red, pink,
                    and golden.
                  </p>
                </div>
              </main>

              {/* Inclusions in the EBC Trek Price */}
              <main className="mt-10" id="Inclusions">
                <h2 className="text-[24px] font-[500]">
                  Inclusions in the EBC Trek Price
                </h2>
                {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                  <div
                    className="flex sm:items-center gap-x-1 pt-3"
                    key={index}
                  >
                    <IoArrowForwardCircleOutline className="text-primary text-[24px]" />
                    <div className="flex sm:items-center sm:flex-row flex-col gap-x-1">
                      <p className="text-[15px] font-[700] sm:font-normal">
                        Guided sightseeing in
                      </p>
                      <span className="sm:font-[700] text-[12px] sm:text-[16px]">
                        Pashupatinath Temple, Boudhanath, Bhaktapur Durbar
                        Square.
                      </span>
                    </div>
                  </div>
                ))}
              </main>

              {/* Price Excludes */}
              <main className="mt-10 bg-[#FEF7E6] p-5" id="Exclude">
                <h2 className="text-[24px] font-[500]">Price Excludes</h2>
                {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                  <div
                    className="flex sm:items-center gap-x-1 pt-3"
                    key={index}
                  >
                    <IoArrowForwardCircleOutline className="text-primary text-[24px]" />
                    <div className="flex sm:items-center sm:flex-row flex-col gap-x-1">
                      <p className="text-[15px] font-[700] sm:font-normal">
                        Guided sightseeing in
                      </p>
                      <span className="sm:font-[700] text-[12px] sm:text-[16px]">
                        Pashupatinath Temple, Boudhanath, Bhaktapur Durbar
                        Square.
                      </span>
                    </div>
                  </div>
                ))}
              </main>

              {/* Everest Base camp */}

              <main className="sm:pt-5" id="Camp">
                <h2 className="text-[24px] font-[500]">Detailed Itinerary</h2>
                <div className="lg:max-w-[800px] w-full m-auto">
                  {faqs.map((faq, index) => (
                    <div key={index} className="p-4 relative border-b-2 h-full">
                      <div className="absolute top-[24px] left-[-1px] h-full w-[1px] bg-[#d9d9d9]"></div>
                      <div className="flex items-center gap-x-5">
                        {/* Timeline circle starts */}
                        <div className="absolute left-[-7px] top-6 h-3 w-3 bg-[#d9d9d9] rounded-full"></div>
                        {/* Timeline circle ends */}
                        <div
                          className="flex justify-between gap-x-3 items-center cursor-pointer"
                          onClick={() => toggleFAQ(index)}
                        >
                          <h3
                            className={`${
                              faq.isOpen ? "text-primary" : ""
                            } sm:text-[20px] text-[14px] font-[700]`}
                          >
                            <p className="font-[500] sm:text-[17px] text-[16px] sm:pr-20">
                              Day 01: Arrival at the Tribhuvan International
                              Airport in Kathmandu and transfer to hotel
                            </p>
                          </h3>
                          <div>
                            {faq.isOpen ? (
                              <IoIosArrowUp className="text-[20px]" />
                            ) : (
                              <IoIosArrowDown className="text-[20px]" />
                            )}
                          </div>
                        </div>
                      </div>
                      <p
                        className={`overflow-hidden transition-all duration-2000 text-[14px] sm:text-[16px] ${
                          faq.isOpen ? "max-h-screen pt-2" : "h-0 py-0"
                        }`}
                      >
                        <div className="space-y-2">
                          <p className="text-[14px] font-[500]">
                            Max. Altitude: Kathmandu (1,400m)
                          </p>
                          <p className="text-[15px]">
                            Our airport representative will be receiving you at
                            Tribhuvan International airport, Kathmandu and s/he
                            will be displaying an Ace the Himalaya signboard
                            outside the airport terminal. You will be then
                            transferred to your respective hotel in our private
                            tourist vehicle.
                          </p>
                          <p className="text-[14px] bg-[#f5f5f5] px-3 py-2">
                            <span>Overninght at a Hotel</span>
                            <span>Meals not Included</span>
                          </p>

                          <div className="text-[15px] bg-[#EAF1FF] px-3 py-2 space-y-2">
                            <p>
                              <span className="font-[700]">Note:</span>If you
                              arrive after 4 pm, there will be a briefing about
                              the trip with our guide. It will be a short
                              pre-trip meeting. Make sure to confirm your
                              queries about your trip. If you arrive before 4
                              pm, a pre-trip meeting will be organized at our
                              office on the same day. Meet and greet with our
                              trip guide.
                            </p>
                            <p>
                              Be sure to bring the following documents to the
                              meeting; two copies of passport-sized photos and a
                              readable copy of your travel insurance policy.
                            </p>
                          </div>
                        </div>
                      </p>
                    </div>
                  ))}
                </div>
              </main>

              {/* Trip Map / Elevation */}

              <main id="Map">
                <h2 className="text-[24px] font-[500]">Trip Map / Elevation</h2>
                <img
                  src="https://www.acethehimalaya.com/wp-content/uploads/2022/11/Nepal-Multi-Sports-Adventure-1.jpg"
                  alt=""
                  className="w-[713px] h-[734px]"
                />
              </main>

              <main id="video">
                <h2 className="text-[24px] font-[500] mb-2">Trip Video</h2>
                <iframe
                  height="430"
                  src="https://www.youtube.com/embed/XAIDDndIu5Q?si=zCBMiLpzZyjQ42rZ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="lg:w-[765px] w-full"
                ></iframe>
              </main>

              {/* FAQs */}
              <div id="FAQS">
                <Faq />
              </div>
            </section>
          </aside>

          {/* Card for pricing */}
          <div className="xl:block hidden sticky top-20">
            <CardPricing />
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
