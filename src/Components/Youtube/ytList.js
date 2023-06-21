import React from "react";
import Ytitems from "./ytitems";

const YtList = ({ videos, onVideoSelect }) => {
  return (
    <>
      {videos.map((video) => (
        <Ytitems
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </>
  );
};

export default YtList;
