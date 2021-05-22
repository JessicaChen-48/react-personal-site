import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Jessica Chen © 2021</small>
          <div className="social-icons">
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/jessicachen415"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              className="social-icon-link github"
              href="https://github.com/JessicaChen-48"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              className="social-icon-link email"
              href="mailto:jessica@jessicaazchen.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <i className="far fa-envelope"></i>
            </a>

            <a
              className="social-icon-link twitter"
              href="https://twitter.com/CallawayJess"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
