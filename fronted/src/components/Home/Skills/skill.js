
import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import style from './skill.module.css';

const Skill = (props) => {
  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";
    const {name, percent} = props;
    return <div>
    <div className={theme ? style["skills-name-dark"] : style["skills-name"]}>
      <h3>{name}</h3>
      <span className={style.number}>{percent}%</span>
    </div>
    <div className={style.bar}>
      <span
        className={`${theme ? style["precentags-dark"] : style.precentags} ${style[name]}`}
      ></span>
    </div>
  </div>
}

export default Skill;