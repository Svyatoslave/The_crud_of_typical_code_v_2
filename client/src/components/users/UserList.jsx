import React from "react";
import { Row } from "react-bootstrap";

import UserItem from "./UserItem";
import NoData from "../NoData";

const UserList = ({ users }) => {
  if (users.length === 0) {
    return <NoData />;
  }
  return (
    <Row className=" mx-auto">
      {users.map((user) => (
        <UserItem key={user.id} user={user}></UserItem>
      ))}
    </Row>
  );
};

export default UserList;
