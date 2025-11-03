import React from "react";

const Button = ({title, className}) => {
  return (
    <button className={`mt-8 px-8 py-3 bg-brand-black-og hover:bg-brand-black-dark text-white font-semibold rounded-lg shadow-lg transition duration-300 cursor-pointer ${className}`}>
      {title}
    </button>
  );
};

export default Button;
