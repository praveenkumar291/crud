import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

const Heading = () => {
  return (
    <div>
      <Navbar color="dark">
        <Container className="d-flex justify-content-between">
          <NavbarBrand href="/" className="text-light">
            My Team
          </NavbarBrand>
          <Nav>
            <NavItem>
              <Link className="btn btn-primary" to="/add">
                AddUser
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Heading;
