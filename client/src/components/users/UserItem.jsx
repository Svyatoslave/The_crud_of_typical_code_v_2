import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

import FullUserModal from "../FullUserModal";

const UserItem = ({ user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-3 mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <p> E-mail: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p> Username: {user.username}</p>
            <p>Website: {user.website}</p>
          </Card.Text>
          <Button variant="primary" onClick={() => handleShow()}>
            Go somewhere
          </Button>
        </Card.Body>
        <FullUserModal show={show} onClose={handleClose} user={user} />
      </Card>
    </div>
  );
};

export default UserItem;
