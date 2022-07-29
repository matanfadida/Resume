import { useContext } from "react";
import { ThemeContext } from "../../App";
import style from "./card.module.css";

const Card = (props) => {
  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";

  const classes = `${theme ? style["card-dark"] : style.card} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
