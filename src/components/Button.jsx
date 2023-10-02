import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-900 text-white font-bold py-2 px-5 m-2 rounded-xl">
        {name}
      </button>
    </div>
  );
};

export default Button;
