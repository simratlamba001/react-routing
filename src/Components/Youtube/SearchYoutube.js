import React, { useState } from "react";

const YtSearch = ({ onTerm }) => {
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onTerm(term);
  };
  return (
    <div className="search py-4 pt-7 flex flex-wrap justify-between mb-6 items-center">
      <div>
        <span className="h-1 rounded w-6 bg-black block"></span>
        <span className="h-1 rounded w-6 bg-black block my-1"></span>
        <span className="h-1 rounded w-6 bg-black block"></span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto relative basis-8/12"
      >
        <input
          type="text"
          className="border border-gray-300 rounded-full p-2 w-full"
          placeholder="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="bg-gray-400 text-white px-4 rounded absolute top-0 right-0 h-full rounded-full">
          Search
        </button>
      </form>
    </div>
  );
};

export default YtSearch;
