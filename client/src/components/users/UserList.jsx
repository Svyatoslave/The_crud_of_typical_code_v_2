import React from "react";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";

import UserItem from "./UserItem";

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <Row className=" mx-auto">
      {users.map((user) => (
        <UserItem key={user.id} user={user}></UserItem>
      ))}
    </Row>
  );
};

export default UserList;
