import Button from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Jessica Chen (c) 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link linkedin"
              to="https://www.linkedin.com/in/jessicachen415"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>

            <Link
              className="social-icon-link github"
              to="https://github.com/JessicaChen-48"
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github"></i>
            </Link>

            <Link
              className="social-icon-link email"
              to="mailto:jessica@jessicaazchen.com"
              target="_blank"
              aria-label="Email"
            >
              <i className="far fa-envelope"></i>
            </Link>

            <Link
              className="social-icon-link twitter"
              to="https://twitter.com/CallawayJess"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
