import "./Cards.css";
import Button from "./Button";

function CardItem({ path, src, text, label, github }) {
  return (
    <>
      <li className="cards-item">
        <div className="cards-item-link">
          <figure
            className={`cards-item-pic-wrap ${label ? "" : `label-hidden`}`}
            data-category={label}
          >
            <img className="cards-item-img" src={src} alt={text}></img>
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{text}</h5>
          </div>
        </div>
        <div className="btns">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Github code"
          >
            <Button buttonStyle="btn--outline">GITHUB</Button>
          </a>
          <a
            href={path}
            target="_blank"
            rel="noreferrer"
            aria-label="To to demo"
          >
            <Button buttonStyle="btn--primary">LINK</Button>
          </a>
        </div>
      </li>
    </>
  );
}

export default CardItem;
