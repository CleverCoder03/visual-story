import Link from "next/link";
import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="relative px-6 md:px-10 lg:px-18 xl:px-28 mt-15 lg:mt-20">
      <div className="bg-white rounded-2xl shadow-md flex flex-col justify-center items-center py-10">
        <h1 className="text-center text-4xl font-serif font-bold text-pink-600">Your story is a masterpiece.</h1>
        <div className="mt-20">
          <Link href="/contact">
            <Button title={"Let's Tell Your Story Together"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
