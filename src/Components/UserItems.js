import React from "react";

const UserItems = ({ item }) => {
  return (
    <>
      <li key={item.id} className="">
        <div className="user-outer mb-4 bg-white rounded p-4">
          <div className="flex flex-wrap items-center">
            <img
              src={item.avatar_url}
              alt=""
              className="rounded-full h-32 w-32 object-cover"
            />
            <div className="content-div ml-4">
              <h2 className="text-xl font-bold text-gray-600 capitalize">
                {item.login}
              </h2>
              <a
                href={item.html_url}
                className="text-base text-black font-bold hover:text-red-500"
              >
                {item.html_url}
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default UserItems;
