"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // for React and Vue
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an instance of Notyf
    const notyf = new Notyf({
      position: { x: "right", y: "top" },
      duration: 4000,
      dismissible: true,
    });
    emailjs
      .sendForm("service_69up7qo", "template_cmn6k5d", form.current, {
        publicKey: "HyqfIAxGsF-YSCY6-",
      })
      .then(
        () => {
          notyf.success("Submitted successfully");
          console.log("SUCCESS!");
        },
        (error) => {
          notyf.error("Failed sending");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="flex h-[100vh] items-center justify-center flex-col md:flex-row gap-8 p-6 md:p-12 bg-gray-900 mt-20">
      <div className="flex-1 mt-20">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">Contact Us</h2>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="John Doe"
              className="bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              // placeholder="name@domain.com"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@domain.com"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              className="bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Write your message here..."
              required
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              id="subscribe"
              type="checkbox"
              className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-blue-300"
            />
            <label
              htmlFor="subscribe"
              className="ml-2 text-sm font-medium text-gray-300"
            >
              Subscribe to our newsletter
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="relative hidden md:block flex-1 h-[450px]">
        <div className="absolute inset-0">
          <Image
            src="/images/antena.jpeg"
            alt="Modern woman working on a laptop"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
