import React from "react";

const Button = ({ title, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-500 py-4 w-full flex justify-center items-center rounded-md shadow-lg text-white font-Khula mb-5"
    >
      {title}
    </button>
  );
};

export default Button;
