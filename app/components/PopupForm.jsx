// components/PopupForm.js

"use client"; // This must be a client component

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { X } from "lucide-react"; // npm install lucide-react (for the icon)

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "", // I've named the 'contact' field 'message'
  });

  // Open the modal on component mount
  useEffect(() => {
    // Wait 5 seconds (5000 milliseconds) before opening the modal
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Runs only once

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // --- YOUR EMAILJS CREDENTIALS ---
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_ENQUIRY_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    // ---------------------------------

    // The object here must match the variables in your EmailJS template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you, your message has been sent!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
        closeModal();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("An error occurred. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  if (!isOpen) {
    return null;
  }

  return (
    // Overlay
    <div className="fixed inset-0 z-300 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-xl bg-white py-8 px-5 md:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          We'll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full justify-center rounded-md border border-transparent bg-black/80 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSending ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
