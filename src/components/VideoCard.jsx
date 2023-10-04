import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative hover:scale-110 transition duration-500">
      <img className="w-full" src={thumbnails.medium.url} alt="" />
      <div className="desc p-2 text-gray-800">
        <h3 className="badge rounded px-1 text-xs font-bold cursor-pointer">
          {title}
        </h3>
        <h3 className="badge rounded px-1 text-xs font-bold cursor-pointer">
          {channelTitle}
        </h3>
      </div>
      <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
        <span className="mr-1 p-1 px-2 font-bold">{statistics.likeCount}</span>
        <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
          {statistics.commentCount}
        </span>
        <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
          {statistics.viewCount}
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
