import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  const { client } = useSelector((state) => state.auth);

  return (
    <>
      <Nav className="navbar" showNav={showNav}>
        <ul className="navbar-links">
          <li className="nav-link-side">
            <Link to="/" onClick={() => setShowNav((prev) => !prev)}>
              Home
            </Link>
          </li>
          <li className="nav-link-side">
            <Link to="/about" onClick={() => setShowNav((prev) => !prev)}>
              About
            </Link>
          </li>
          <li className="nav-link-side">
            <Link to="/training" onClick={() => setShowNav((prev) => !prev)}>
              Training
            </Link>
          </li>
          <li className="nav-link-side">
            <Link to="/behaviour" onClick={() => setShowNav((prev) => !prev)}>
              Behaviour
            </Link>
          </li>
          <li className="nav-link-side">
            <Link to="/pricing" onClick={() => setShowNav((prev) => !prev)}>
              Pricing
            </Link>
          </li>
          <li className="nav-link-side">
            <Link to="/blog" onClick={() => setShowNav((prev) => !prev)}>
              Blog
            </Link>
          </li>
          <li className="nav-link-side">
            <Link to="/breed" onClick={() => setShowNav((prev) => !prev)}>
              Breed info
            </Link>
          </li>
          {client && (
            <li className="nav-link-side">
              {" "}
              <Link to="/reports" onClick={() => setShowNav((prev) => !prev)}>
                <button className="btn">Client Portal</button>
              </Link>
            </li>
          )}
        </ul>
      </Nav>
      <div className="nav-toggle" onClick={() => setShowNav((prev) => !prev)}>
        <GiHamburgerMenu style={{ color: "#e2e2e2" }} />
      </div>
    </>
  );
};

export default Navbar;

const Nav = styled.div`
  transform: ${(props) =>
    props.showNav ? "translateX(-100%)" : "translateX(0)"};
  transition: transform 0.3s ease-in-out;
`;
