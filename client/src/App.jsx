import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { fetchAllUsers } from "./store/action/asyncAction";
import UserList from "./components/users/userList";
import Header from "./components/header";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const displayAllUsers = () => {
    dispatch(fetchAllUsers());
  };

  return (
    <Container>
      <Header></Header>

      <main>
        <UserList></UserList>
      </main>
    </Container>
  );
};

export default App;
