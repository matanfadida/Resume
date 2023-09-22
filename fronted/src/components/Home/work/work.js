import style from './work.module.css';

const Work = () => {
  return (
    <section className={style.section}>
      <div>
        <h1 id="Skills">Work Experience</h1>
        <ul className={style["ul-first"]}>
          <li><h3 className={style.job}>Full Stack Developer | Qualish</h3></li>
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
