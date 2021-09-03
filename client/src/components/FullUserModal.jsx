import React from "react";
import { Modal, Button } from "react-bootstrap";

const FullUserModal = ({ show, onClose, user }) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>{user.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body></Modal.Body>
  </Modal>
);

export default FullUserModal;
