import warblerImg from "./assets/warbler-hero.jpeg"
import joblyImg from "./assets/jobly.jpg"
import pokeballImg from "./assets/poke.jpg"
import siteImg from "./assets/hero-img-3.jpg"

let cards1 = [
  {
    src: joblyImg,
    text: "Jobly: React front-end and RESTful API built with Express",
    label: "REACT & EXPRESS",
    path: "http://jobly.jessicaazchen.com",
    github: ""
  },
  {
    src: warblerImg,
    text: "Warbler: Twitter clone that uses SQL-Alchemy for database querying",
    label: "FLASK & JINJA",
    path: "https://warblerwarblering.herokuapp.com/",
    github: "https://github.com/JessicaChen-48/flask-warbler"
  }
]
 let cards2= [

  {
    src: siteImg,
    text: "Personal Website: mobile-first, fully responsive React website",
    label: "REACT",
    path: "/",
    github: "https://github.com/JessicaChen-48/react-personal-site"
  },
  {
    src: siteImg,
    text: "TaxLion: React single-page application for calculating taxes for stocks",
    label: "REACT",
    path: "/"
  },
  {
    src: pokeballImg,
    text: "Poke Trainer: React site integrating with the PokeAPI",
    label: "REACT",
    path: "/",
    github: "https://github.com/JessicaChen-48/poketeams"
  }
]

let reactCards = [
  {
    src: joblyImg,
    text: "Jobly: React front-end and RESTful API built with Express",
    label: "REACT & EXPRESS",
    path: "http://jobly.jessicaazchen.com"
  },  {
    src: siteImg,
    text: "Personal Website: mobile-first, fully responsive React website",
    label: "REACT",
    path: "/"
  },  {
    src: pokeballImg,
    text: "Poke Trainer: React site integrating with the PokeAPI",
    label: "REACT",
    path: "/services"
  }
]

let expressCards = [
  {
    src: joblyImg,
    text: "Jobly: React front-end and RESTful API built with Express",
    label: "REACT & EXPRESS",
    path: "http://jobly.jessicaazchen.com"
  },
]

let flaskCards = [
  {
    src: warblerImg,
    text: "Warbler: Twitter clone that uses SQL-Alchemy for database querying",
    label: "FLASK & JINJA",
    path: "https://warblerwarblering.herokuapp.com/"
  }
]

export {cards1, cards2, reactCards, expressCards, flaskCards}