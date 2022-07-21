
import style from './skill.module.css';

const Skill = (props) => {
    const {name, percent} = props;
    return <div>
    <div className={style["skills-name"]}>
      <h3>{name}</h3>
      <span className={style.number}>{percent}%</span>
    </div>
    <div className={style.bar}>
      <span
        className={`${style.precentags} ${style[name]}`}
      ></span>
    </div>
  </div>
}

export default Skill;