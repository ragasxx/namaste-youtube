import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return videos.length === 0 ? (
    <Loader />
  ) : (
    <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          {" "}
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideosContainer;
