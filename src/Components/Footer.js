import Button from "./Button"
import "./Footer.css"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Jessica Chen (c) 2021</small>
          <div className="social-icons">
            <Link className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            ><i className="fab fa-linkedin"></i></Link>

          <Link className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Facebook"
            ><i className="fab fa-twitter"></i></Link>

          <Link className="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="Facebook"
            ><i className="fab fa-github"></i></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;