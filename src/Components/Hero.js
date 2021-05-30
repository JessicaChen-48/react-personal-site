import Button from "./Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../App.js";
import "./Hero.css";

function Hero() {
  return (
    <div id="home-anchor" className="hero-container">
      <h1>I'm Jessica</h1>
      <p>a full-stack software engineer</p>
      <div className="hero-btns">
        <AnchorLink offset={() => 70} href="#about-anchor">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn-large"
          >
            ABOUT ME
          </Button>
        </AnchorLink>
        <AnchorLink offset={() => 100} href="#projects-anchor">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn-large"
          >
            RECENT PROJECTS
          </Button>
        </AnchorLink>
      </div>
    </div>
  );
}

export default Hero;
