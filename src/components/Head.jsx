import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-3 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={handleToggle}
          className="h-4 cursor-pointer"
          alt="menu"
          src="https://w7.pngwing.com/pngs/436/707/png-transparent-hamburger-button-computer-icons-menu-menu-food-text-rectangle.png"
        />
        <img
          className="h-7 mx-5"
          alt="youtube logo"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="border border-gray-700 p-2 h-10 w-1/2 px-12 hover:cursor-pointer"
        />
        <button className="border border-gray-400 rounded-e-full p-2 px-4 bg-gray-300">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-7"
          alt="user-logo"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        />
      </div>
    </div>
  );
};

export default Head;
