import React from "react";
import UserItems from "./UserItems";

const UserListing = ({ loginuser }) => {
  const renderUser = loginuser.map((item) => (
    <UserItems key={item.id} item={item} />
  ));
  return (
    <>
      <section className="bg-gray-200 py-16">
        <div className="max-w-4xl mx-auto">
          <ul className="">{renderUser}</ul>
        </div>
      </section>
    </>
  );
};

export default UserListing;
