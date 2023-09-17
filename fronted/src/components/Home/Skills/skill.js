import { useContext } from "react";
import { ThemeContext } from "../../../App";
import style from "./skill.module.css";

const Skill = (props) => {
  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";
  const { name, text } = props;
  return (
    <li className={style["li-style"]}>
      <h3 className={theme ? style["skills-name-dark"] : style["skills-name"]}>
        {name}
      </h3>
      <p>{text}</p>
    </li>
  );
};

export default Skill;
