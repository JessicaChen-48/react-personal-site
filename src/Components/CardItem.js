import {Link} from "react-router-dom"


function CardItem({path, src, text, label}) {
  return (
    <>
      <li className="cards-item">
        <div className="cards-item-link">
          <a href="https://warblerwarblering.herokuapp.com/">
          <figure className="cards-item-pic-wrap" data-category={label}>
            <img className="cards-item-img" src={src} alt=""></img>
          </figure>
          </a>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{text}</h5>
          </div>
        </div>
      </li>
    </>
  )
}

export default CardItem;