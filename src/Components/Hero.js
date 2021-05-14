import Button from "./Button"
import {Link} from "react-router-dom"
import "../App.js"
import "./Hero.css"

function Hero() {
  return (
    <div className="hero-container">
      <h1>I'm Jessica</h1>
      <p>a front-end software engineer</p>
      <div className="hero-btns">
        <Link to="/about"><Button className="btns" buttonStyle="btn--outline" buttonSize="btn-large">ABOUT ME</Button></Link>
        <Link to="/projects"><Button className="btns" buttonStyle="btn--primary" buttonSize="btn-large">CHECK OUT MY PROJECTS<i className="far fa-play-circle"></i></Button></Link>
      </div>
    </div>
  )
}

export default Hero;