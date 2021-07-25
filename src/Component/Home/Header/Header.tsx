import React from "react";
import { HeaderData } from "./HeaderData";
import logo from "../../../images/logo.png";
import "./Header.css";
import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div className="menuToggler">
          <div>
            <Navbar.Brand href="#home">
              {" "}
              <img src={logo} alt="" />
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
        </div>
        <div className="mainMenu">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {HeaderData.map((td) => (
                <Nav.Link className="singleMenu" href="#features">
                  {td.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
