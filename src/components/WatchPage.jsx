import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParam] = useSearchParams();
  console.log(searchParam);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div>
      <div>
        <iframe
          width="1000"
          height="500"
          src={`https://www.youtube.com/embed/${searchParam.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
