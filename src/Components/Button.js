import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn-md", "btn-lg"];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <>
      <Link to="/contact" className="btn-mobile">
        <button
          className={`btn ${checkBtnStyle} ${checkBtnSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    </>
  );
}

export default Button;
