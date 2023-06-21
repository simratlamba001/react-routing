import React from "react";

const YtDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h3>Enter a Search keyword to Load</h3>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  const newdate = new Date(video.snippet.publishTime).toLocaleString();
  return (
    <>
      <div className="video-iframe">
        <iframe
          title="video player"
          src={videoSrc}
          style={{ width: "100%", height: "450px" }}
        />
      </div>
      <div className="video-title mt-3 pb-2 border-b mb-3">
        <h4 className="text-[1.6rem] font-semibold">{video.snippet.title}</h4>
      </div>
      <div className="channel-desc">
        <h4 className="text-lg mb-4 font-semibold flex items-center">
          <img
            src={video.snippet.thumbnails.default.url}
            alt="Thumbnail"
            className="rounded-full h-12 w-12 mr-2"
          />{" "}
          {video.snippet.channelTitle}
        </h4>
        <div className="bg-gray-200 p-4 rounded">
          <p className="mb-0">{video.snippet.description}</p>
          <p>{newdate}</p>
        </div>
      </div>
    </>
  );
};

export default YtDetail;
