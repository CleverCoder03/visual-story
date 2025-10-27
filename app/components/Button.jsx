import React from "react";

const Button = ({title}) => {
  return (
    <button className="mt-8 px-8 py-3 bg-brand-black-og hover:bg-brand-black-dark text-white font-semibold rounded-lg shadow-lg transition duration-300 cursor-pointer">
      {title}
    </button>
  );
};

export default Button;
