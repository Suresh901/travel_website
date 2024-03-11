"use client";
import Button from "@/app/components/Button";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="grid grid-col-1 lg:grid-cols-2 gap-10 lg:mx-10">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="border bg-[#f3f8f6] p-4 rounded-lg"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="border bg-[#f3f8f6] p-4 rounded-lg"
      />
      <input
        type="number"
        name="contact"
        placeholder="Contact"
        value={formData.contact}
        onChange={handleChange}
        className="border bg-[#f3f8f6] p-4 rounded-lg"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="border bg-[#f3f8f6] p-4 rounded-lg"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="border bg-[#f3f8f6] p-8 rounded-lg col-span-full"
      />
      <Button label="Submit" />
    </div>
  );
};

export default ContactForm;
