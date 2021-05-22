import "../App.css";
import "./Projects.css";
import Cards from "../Components/Cards"

function Projects() {

  let cards1 = [
    {
      src: joblyImg,
      text: "Jobly: React front-end and RESTful API built with Express",
      label: "REACT & EXPRESS",
      path: "http://jobly.jessicaazchen.com"
    },
    {
      src: warblerImg,
      text: "Warbler: Twitter clone that uses SQL-Alchemy for database querying",
      label: "FLASK & JINJA",
      path: "https://warblerwarblering.herokuapp.com/"
    }
  ]
   let cards2= [

    {
      src: siteImg,
      text: "Personal Website: mobile-first, fully responsive React website",
      label: "REACT",
      path: "/"
    },
    {
      src: siteImg,
      text: "TaxLion: React single-page application for calculating taxes for stocks",
      label: "REACT",
      path: "/services"
    },
    {
      src: pokeballImg,
      text: "Poke Trainer: React site integrating with the PokeAPI",
      label: "REACT",
      path: "/services"
    }
  ]

  return (
    <>
      <div className="container">
        <div className="page-text">
        <h1>REACT</h1>
        <h1>EXPRESS</h1>
        <h1>FLASK</h1>
        </div>
      </div>
    </>
  );
}

export default Projects;
