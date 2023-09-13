import { useContext } from "react";
import { ThemeContext } from "../../../App";
import style from "./skill.module.css";

const Skill = (props) => {
  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";
  const { name, text } = props;
  return (
    <div>
      <h3 className={theme ? style["skills-name-dark"] : style["skills-name"]}>
        {name}
      </h3>
      <p>asdasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddas</p>
    </div>
  );
};

export default Skill;
