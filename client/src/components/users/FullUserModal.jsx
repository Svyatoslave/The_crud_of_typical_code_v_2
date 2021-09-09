import React from "react";
import { Modal, Card } from "react-bootstrap";

const FullUserModal = ({ show, onClose, user }) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>{user.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Card.Title>Main Information:</Card.Title>
      <Card.Text>E-mail: {user.email}</Card.Text>
      <Card.Text>Phone: {user.phone}</Card.Text>
      <Card.Text>Username: {user.username}</Card.Text>
      <Card.Text>Website: {user.website}</Card.Text>
      <hr />
      <Card.Title>Address: </Card.Title>
      <Card.Text>Street: {user.address.street}</Card.Text>
      <Card.Text>Suite: {user.address.suite}</Card.Text>
      <Card.Text>City: {user.address.city}</Card.Text>
      <Card.Text>Zipcode: {user.address.zipcode}</Card.Text>
      <hr />
      <Card.Title>Geo:</Card.Title>
      <Card.Text> Street: {user.address.geo.lat}</Card.Text>
      <Card.Text>Suite: {user.address.geo.lng}</Card.Text>
      <hr />
      <Card.Title>Company: </Card.Title>
      <Card.Text>Name: {user.company.name}</Card.Text>
      <Card.Text>CatchPhrase: {user.company.catchPhrase}</Card.Text>
      <Card.Text>Bs: {user.company.bs}</Card.Text>
      <hr />
    </Modal.Body>
  </Modal>
);

export default FullUserModal;
