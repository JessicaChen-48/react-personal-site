import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn-md", "btn-lg"];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <>
        <button
          className={`btn ${checkBtnStyle} ${checkBtnSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
    </>
  );
}

export default Button;