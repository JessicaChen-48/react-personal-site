import "./Cards.css";
import Button from "./Button";

function CardItem({ path, src, text, label }) {
  return (
    <>
      <li className="cards-item">
        <div className="cards-item-link">
          <a href={path}>
            <figure
              className={`cards-item-pic-wrap ${label ? "" : `label-hidden`}`}
              data-category={label}
            >
              <img className="cards-item-img" src={src} alt={text}></img>
            </figure>
          </a>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{text}</h5>
          </div>
        </div>
        <div className="btns">
          <Button buttonStyle="btn--outline">
            GITHUB
          </Button>
          <Button buttonStyle="btn--primary">
            LINK
          </Button>
        </div>
      </li>
    </>
  );
}

export default CardItem;
