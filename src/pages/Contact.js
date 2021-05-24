import "../App.css";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="page-text">
          <h1>CONTACT ME</h1>
          <p>Want to get to know more about me? Please contact me at any of the below methods!</p>

          <div className="social-container">
          <a
              className="social-icon-link-contact linkedin"
              href="https://www.linkedin.com/in/jessicachen415"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-2x fa-linkedin"></i>
            </a>

            <a
              className="social-icon-link-contact github"
              href="https://github.com/JessicaChen-48"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <i className="fab fa-2x fa-github"></i>
            </a>

            <a
              className="social-icon-link-contact email"
              href="mailto:jessica@jessicaazchen.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <i className="far fa-2x fa-envelope"></i>
            </a>

            <a
              className="social-icon-link-contact twitter"
              href="https://twitter.com/CallawayJess"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-2x fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
