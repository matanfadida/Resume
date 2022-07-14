import { UilBracketsCurly } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";

import style from "./skills.module.css";

const Skills = () => {
  return (
    <section className={style.section}>
      <h2 id="Skills">Skills</h2>
      <span>My tecnical level</span>
      <div>
        <div>
          <div className={style["fronted-header"]}>
            <i className={style.icon}>
              <UilBracketsCurly />
            </i>
            <h1>Fronted Development</h1>
            <i className={style.icon}>
              <UilAngleDown />
            </i>
          </div>
          <div>
            <div className={style["skills-name"]}>
              <h1>Html</h1>
              <span>90%</span>
            </div>
            <div>
              <h1>css</h1>
              <span>90%</span>
            </div>
            <div>
              <h1>JavaScript</h1>
              <span>90%</span>
            </div>
            <div>
              <h1>React-Hooks</h1>
              <span>90%</span>
            </div>
          </div>
        </div>

        {/* <div>
            <UilBracketsCurly />
            <div className="front">
              <h1>Beckend Development</h1>
            </div>
            <UilAngleDown />
          </div> */}
      </div>
    </section>
  );
};

export default Skills;
