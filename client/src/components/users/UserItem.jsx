import React, { useContext } from "react";

const UserItem = ({ user }) => {
  return (
    <li className="col">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">E-mail: {user.email}</p>
          <p className="card-text">Phone: {user.phone}</p>
          <p className="card-text">Username: {user.username}</p>
          <p className="card-text">Website: {user.website}</p>
          <a href="#" className="btn btn-primary">
            Open full
          </a>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
