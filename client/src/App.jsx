import React from "react";
import "./App.css";
import { fetchAllUsers } from "./store/action/asyncAction";
import { useDispatch } from "react-redux";

import UserList from "./components/users/userList";

function App() {
  const dispatch = useDispatch();
  const displayAllUsers = () => {
    dispatch(fetchAllUsers());
  };

  return (
    <div className="App">
      <header>
        <button className="btn btn-primary" onClick={displayAllUsers}>
          Refresh
        </button>
      </header>
      <main>
        <UserList></UserList>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
