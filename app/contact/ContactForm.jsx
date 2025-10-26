import React from "react";
import Headline from "../components/Headline";
import VisualStoryContactForm from "./VisualStoryContactForm";

const ContactForm = () => {
  return (
    <div className="px-6 md:px-10 lg:px-18 xl:px-28 mt-5">
      <div className="flex flex-col items-center">
        <Headline title={"Get In Touch"} />
        <p className="text-center max-w-2xl font-sans ">
          For project inquiries, please fill out the form below. We'll get back
          to you within 24 hours. For all other questions, feel free to reach
          out to us directly.
        </p>
      </div>

      <VisualStoryContactForm />
    </div>
  );
};

export default ContactForm;
