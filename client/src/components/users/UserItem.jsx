import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";

import FullUserModal from "./FullUserModal";

const UserItem = ({ user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col className=" mb-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>E-mail: {user.email}</Card.Text>
            <Card.Text>Phone: {user.phone}</Card.Text>
            <Card.Text>Username: {user.username}</Card.Text>
            <Card.Text>Website: {user.website}</Card.Text>
            <Button variant="primary" onClick={() => handleShow()}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <FullUserModal show={show} user={user} onClose={handleClose} />
    </>
  );
};

export default UserItem;
