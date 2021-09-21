import React from "react";
import { useController } from "react-hook-form";

const TextInput = ({ name, control }) => {
  const {
    field: { ref, ...inputRef },
  } = useController({ name, control });
  return (
    <div className="w-full mb-5">
      <p className="text-gray-500 text-base font-Khula font-semibold mb-2">
        {name}
      </p>
      <input
        ref={ref}
        {...inputRef}
        name={name}
        placeholder={name}
        className="block w-full text-lg px-1 py-2 border-2 border-gray-300 focus:ring-purple-500 focus:border-purple-500 rounded-md"
      />
    </div>
  );
};

export default TextInput;
