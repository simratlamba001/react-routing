import React, { useState, useEffect } from "react";
import YtSearch from "./SearchYoutube";
import YtDetails from "./ytDetails";
import YtList from "./ytList";
import axios from "axios";

const YoutubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const hanldeSearchSubmit = async (term) => {
    const API_KEY = "AIzaSyCrsfenEU3wmfEG23QV3rbTcYCxTDQATzo";
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 20,
          key: API_KEY,
          q: term,
        },
      }
    );
    console.log(response);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  useEffect(() => {
    hanldeSearchSubmit("songs");
  }, []);

  const handleSelected = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <div className="w-10/12 mx-auto px-4">
        <YtSearch onTerm={hanldeSearchSubmit} />
        <div className="flex mt-4 gap-6">
          <div className="w-4/6">
            <YtDetails video={selectedVideo} />
          </div>
          <div className="w-2/6 max-h-96 overflow-auto">
            <YtList videos={videos} onVideoSelect={handleSelected} />
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeVideos;
