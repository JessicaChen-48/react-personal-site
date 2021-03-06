import CardItem from "./CardItem";
import "./Cards.css";
import { cards1 } from "../ProjectHelper";

function Cards() {
  return (
    <>
      <div id="projects-anchor" className="cards">
        <h1>RECENT PROJECTS</h1>
        <div className="cards-container">
          <div className="cards-wrapper">
            <ul className="cards-items">
              {cards1.map((card) => {
                let { src, text, label, path, github } = card;
                return (
                  <CardItem
                    src={src}
                    text={text}
                    label={label}
                    path={path}
                    github={github}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
