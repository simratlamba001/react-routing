import React from "react";

const Ytitems = ({ video, onVideoSelect }) => {
  return (
    <>
      <a
        href=""
        onClick={() => onVideoSelect(video)}
        style={{ cursor: "pointer" }}
        className="flex gap-4 mb-2 "
      >
        <div className="w-[168px] h-[98px]">
          <img
            className="rounded-[12px] w-[168px] h-[98px] object-cover"
            src={video.snippet.thumbnails.medium.url}
            alt=""
            title={video.snippet.title}
          />
        </div>
        <div className="w-4/6">
          <h4 className="font-semibold">{video.snippet.title}</h4>
        </div>
      </a>
    </>
  );
};

export default Ytitems;
