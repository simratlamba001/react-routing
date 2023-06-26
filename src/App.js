import { useEffect, useState } from "react";
import UserListing from "./Components/UserListing";
import axios from "axios";
import SearchUser from "./Components/SearchUser";

function App() {
  const [loginuser, setLoginUser] = useState([]);
  const fetchUser = async () => {
    const { data } = await axios.get("https://api.github.com/users", {
      headers: {
        Authorization: process.env.REACT_APP_GITHUB_TOKEN,
      },
    });
    setLoginUser(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const searchUser = async (login) => {
    const { data } = await axios.get(`https://api.github.com/users/${login}`);
    const singleItem = [data];
    console.log(singleItem);
    setLoginUser(singleItem);
  };
  return (
    <>
      <section className="bg-gray-300">
        <SearchUser onTerm={searchUser}></SearchUser>
        <UserListing loginuser={loginuser}></UserListing>
      </section>
    </>
  );
}

export default App;
