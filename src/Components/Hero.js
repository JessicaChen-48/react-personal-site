import Button from "./Button"
import {Link} from "react-router-dom"
import "../App.js"
import "./Hero.css"

function Hero() {
  return (
    <div id="home-anchor" className="hero-container">
      <h1>I'm Jessica</h1>
      <p>a full-stack software engineer</p>
      <div className="hero-btns">
        <Link to="/about"><Button className="btns" buttonStyle="btn--outline" buttonSize="btn-large">ABOUT ME</Button></Link>
        <Link to="/projects"><Button className="btns" buttonStyle="btn--primary" buttonSize="btn-large">RECENT PROJECTS</Button></Link>
      </div>
    </div>
  )
}

export default Hero;