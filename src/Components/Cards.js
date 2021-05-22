import CardItem from "./CardItem"
import "./Cards.css"
import {cards1, cards2} from "../ProjectHelper"

function Cards() {

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