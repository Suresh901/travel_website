"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Rating from "../rating/Rating";

const CardPricing = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState(1);
  return (
    <main className="sticky top-20">
      <div className="xl:border-2 rounded-2xl xl:shadow-custom py-8 px-5 xl:max-w-[424px] w-full">
        <div className="flex gap-x-10">
          <p>
            from <span className="text-[18px] font-[700]">Rs. 150000</span>
          </p>
          <div>{/* <Rating value={0} text="(No Review)" /> */}</div>
        </div>

        {/* Buttons for changing list */}
        <div className="mt-5 flex justify-between gap-x-5">
          <span
            className="w-[180px]  h-[50px] bg-primary text-white rounded-xl flex items-center justify-center font-[500]"
            onClick={() => setActiveTab(1)}
          >
            Book
          </span>
          <span
            className="w-[180px] h-[50px] rounded-xl border flex items-center justify-center font-[500]"
            onClick={() => setActiveTab(2)}
          >
            Inquiry
          </span>
        </div>

        {/* Tab content */}

        {activeTab === 1 && (
          <div className="py-5">
            <div className="border-t-2 border-x-2 rounded-t-xl py-2 px-5">
              <p>Date </p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full"
              />
            </div>
            <div className="px-5 border-2 py-5 rounded-b-xl">
              <p>Guest Name *</p>
              <div className="mt-3 flex gap-x-2">
                <select>
                  <option>Mr</option>
                  <option>Miss</option>
                  <option>Mrs</option>
                </select>
                <input
                  type="text"
                  placeholder="Guest Name"
                  className="outline-none border-2 rounded-lg px-1"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="space-y-3 py-5">
            <input
              type="text"
              className="p-2 border-2 w-full rounded-lg"
              placeholder="Name *"
            />
            <input
              type="text"
              className="p-2 border-2 w-full rounded-lg"
              placeholder="Email *"
            />
            <input
              type="text"
              className="p-2 border-2 w-full rounded-lg"
              placeholder="Phone *"
            />
            <input
              type="text"
              className="p-2 border-2 w-full rounded-lg"
              placeholder="Note *"
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default CardPricing;
