import { useContext } from 'react';
import style from './work.module.css';
import { ThemeContext } from '../../../App';

const Work = () => {
  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";
  const styleTitle = theme ? style["skills-title-dark"] : style["skills-title"];
  return (
    <section className={style.section}>
      <div>
        <h2 id="Skills" className={styleTitle}>Work Experience</h2>
        <ul className={style["ul-first"]}>
          <li><h3 className={styleTitle}>Full Stack Developer <span className={style["span-title"]}>|</span> Qualish</h3></li>
          <ul>
            <li>
              Develop and maintain full-stack web applications using C#, .Net
              Core, Sql Server.
            </li>
            <li>Implement responsive and user-friendly UI designs.</li>
            <li>
              Design and integrate databases while ensuring the stability and
              longevity of the backend systems
            </li>
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default Work;
