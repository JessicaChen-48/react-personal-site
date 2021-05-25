import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import Button from "./Button"
import AnchorLink from "react-anchor-link-smooth-scroll"

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick() {
    setClick(!click);
  };

  function closeMobileMenu() {
    setClick(false);
  };

  function showButton() {
    (window.innerWidth > 960) ? setButton(true) : setButton(false)
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
      <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          
        <div className="navbar-container">

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <AnchorLink offset="100" href="#home-anchor" className="nav-links" onClick={closeMobileMenu}>
                Home
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                href="#about-anchor"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Me
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                href="#projects-anchor"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                href="#contact-anchor"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </AnchorLink>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
