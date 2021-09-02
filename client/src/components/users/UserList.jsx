import React from "react";
import { useSelector } from "react-redux";

import UserItem from "./UserItem";

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className=" row">
      {users.map((user) => (
        <UserItem key={user.id} user={user}></UserItem>
      ))}
    </div>
  );
};

export default UserList;
