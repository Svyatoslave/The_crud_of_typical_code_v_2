import React, { useState } from "react";

import FullUserModal from "../FullUserModal";

const UserItem = ({ user }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="col-3 mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">E-mail: {user.email}</p>
          <p className="card-text">Phone: {user.phone}</p>
          <p className="card-text">Username: {user.username}</p>
          <p className="card-text">Website: {user.website}</p>
          <button
            className="btn btn-primary"
            onClick={() => setModalActive(true)}
          >
            Open full
          </button>
        </div>
        <FullUserModal
          active={modalActive}
          setActive={setModalActive}
          user={user}
        ></FullUserModal>
      </div>
    </div>
  );
};

export default UserItem;
