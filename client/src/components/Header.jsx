import React, { useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import { fetchAllUsers } from "../store/action/asyncAction";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const displayAllUsers = () => {
    dispatch(fetchAllUsers());
  };

  useEffect(() => {
    displayAllUsers();
  }, []);

  return (
    <Navbar bg="primary" variant="dark" className="my-3 w-100 ">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Button onClick={displayAllUsers}>Refresh</Button>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
