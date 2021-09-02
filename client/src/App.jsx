import React from "react";
import "./App.css";
import { fetchAllUsers } from "./store/action/asyncAction";
import { useDispatch } from "react-redux";

import UserList from "./components/users/userList";
import Header from "./components/header";

const App = () => {
  const dispatch = useDispatch();
  const displayAllUsers = () => {
    dispatch(fetchAllUsers());
  };

  return (
    <div className="container">
      <Header></Header>

      <main>
        <UserList></UserList>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
