import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    // make an api call after every key press
    // but if the diff bw key press is < 200ms, decline the api call

    // we can use settimeout
    // but if we press before 200ms it will re render and it will break the component
    // so we have to use return function
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
      <div className="relative col-span-10 text-center">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border border-gray-700 p-2 rounded-s-full h-10 w-1/2 px-12 hover:cursor-pointer"
          />
          <button className="border border-gray-400 rounded-e-full p-2 px-4 bg-gray-300">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white px-3 py-2 w-[34rem] ml-[16rem] shadow-lg rounded-lg z-10">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 shadow-sm cursor-pointer hover:bg-gray-200"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
