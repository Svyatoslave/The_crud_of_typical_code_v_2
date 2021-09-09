import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => (
  <Navbar bg="primary" variant="dark" className="my-3 w-100 ">
    <Container>
      <Navbar.Brand href="#home">Users</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
