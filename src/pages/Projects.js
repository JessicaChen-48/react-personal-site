import {reactCards, expressCards, flaskCards} from "../ProjectHelper"
import CardItem from "../Components/CardItem"
import "../App.css";
import "./Projects.css";

function Projects() {

  return (
    <>
      <div className="projects-container">
        <div className="projects-page-text">
          <h1>REACT</h1>
        <ul className="cards-items">
            {reactCards.map(card =>
              <CardItem src={card.src} text={card.text} path={card.path}/>
            )}
          </ul>
          <h1>EXPRESS</h1>
          <ul className="cards-items">
            {expressCards.map(card =>
              <CardItem src={card.src} text={card.text} path={card.path}/>
            )}
          </ul>
          <h1>FLASK</h1>
          <ul className="cards-items">
            {flaskCards.map(card =>
              <CardItem src={card.src} text={card.text} path={card.path}/>
            )}
          </ul>

        </div>
      </div>
    </>
  );
}

export default Projects;
