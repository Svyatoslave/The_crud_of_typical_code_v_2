import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllUsers } from "./store/thunks/asyncAction";
import UserList from "./components/users/userList";
import Header from "./components/header";
import Loader from "./components/Spinner";
import MyError from "./components/MyError";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const displayAllUsers = () => {
    dispatch(fetchAllUsers());
  };

  useEffect(() => {
    displayAllUsers();
  }, []);

  return (
    <Container>
      <Header></Header>

      <main>
        {users != null && <UserList users={users}></UserList>}
        {loading && <Loader />}
        {error && <MyError />}
      </main>
    </Container>
  );
};

export default App;
