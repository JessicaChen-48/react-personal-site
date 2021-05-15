import CardItem from "./CardItem"
import "./Cards.css"
import warbler from "../images/warbler-hero.jpeg"
import img2 from "../images/img-2.jpg"
import img7 from "../images/img-7.jpg"
import img8 from "../images/img-8.jpg"
import img3 from "../images/img-3.jpg"

function Cards() {
   // cards1 and cards2 is separated by ul so that 2 stack on top of 3
  let cards1 = [
    {
      src: img2,
      text: "Jobly: React front-end and RESTful API built with Express",
      label: "REACT & EXPRESS",
      path: "/services"
    },
    {
      src: warbler,
      text: "Warbler: Twitter clone that uses SQL-Alchemy for database querying",
      label: "FLASK & JINJA",
      path: "https://warblerwarblering.herokuapp.com/"
    }
  ]
   let cards2= [

    {
      src: img8,
      text: "Personal Website: mobile-first, fully responsive React website",
      label: "REACT",
      path: "/services"
    },
    {
      src: img2,
      text: "TaxLion: React single-page application for calculating taxes for stocks",
      label: "REACT",
      path: "/services"
    },
    {
      src: img3,
      text: "Poke Trainer: React site integrating with the PokeAPI",
      label: "REACT",
      path: "/services"
    }
  ]

  return (
    <div className="cards">
      <h1>RECENT PROJECTS</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            {cards1.map(card =>
              <CardItem src={card.src} text={card.text} label={card.label} path={card.path}/>
            )}
          </ul>
          <ul className="cards-items">
            {cards2.map(card =>
              <CardItem src={card.src} text={card.text} label={card.label} path={card.path}/>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards