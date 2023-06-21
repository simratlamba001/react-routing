import React, { useState } from "react";

const SearchUser = ({ onTerm }) => {
  const [term, setTerm] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onTerm(term);
    console.log(term);
    setTerm([]);
  };
  // const handleChange = (e) => {
  //   setTerm(e.target.value);
  //   onTerm(term);
  // };
  return (
    <>
      <section className="bg-gray-200 p-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div>
            <label className="block">Search User</label>
            <input
              type="text"
              value={term}
              className="border border-gray-300 rounded p-2"
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default SearchUser;
