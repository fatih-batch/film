import { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { ThemeContext, TextColor } from "../utils/context";

const Layout = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { color, setColor } = useContext(TextColor);

  const background = () => {
    if (theme == "bg-dark") {
      setTheme("bg-light");
      setColor("black");
    } else {
      setTheme("bg-dark");
      setColor("white");
    }
  };

  return (
    <div className={theme} style={{ color: `${color}` }}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">My Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favorite">Favorites</Nav.Link>
            </Nav>
            <Nav>
              {theme == "bg-dark" ? (
                <Nav.Link
                  onClick={() => {
                    background();
                  }}
                >
                  Dark mode : on
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() => {
                    background();
                  }}
                >
                  Dark mode : off
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Layout;
