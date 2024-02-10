"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = React.createRef<HTMLFormElement>();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const currentForm = form.current;

    if (currentForm == null) return;

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        currentForm,
        `${process.env.NEXT_PUBLIC_PUBLIC_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          name="from_company"
          id="company"
          type="text"
          placeholder="Your Company Name"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="from_name"
          id="email"
          placeholder="Your Contact Email"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="from_location"
          id="location"
          placeholder="Your Company Location"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          rows={4}
          placeholder="Your Message"
          name="message"
          id="message"
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
          required
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded-md"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
