
import style from "./about.module.css";

import { UilDownloadAlt } from "@iconscout/react-unicons";
import Button from "../../UI/Button";

const About = () => {
  return (
    <section className={style.section}>
      <div>
        <h2 className={style["about-title"]}>About Me</h2>
        <br />
        <span className={style["about-subtitle"]}>My introduction</span>
      </div>

      <p>
        I am graduating in my third year, I am in the top 10% of my class.
        Looking for an opportunity to start my programming career in a company
        where I could contribute, learn and excel. I’m ambitious, curious,
        self-taught, and a very hard worker. Capable of working alone as well as
        collaborating on a team committing to deadlines. I’m educated with some
        of the recent developing technologies such as React Hooks, NodeJs,
        NextJs, JS, Python, C, C++, Java, SQL MongoDB, and ExpressJs.
      </p>
      <Button>
        <a download="" href="Matan_Fadida_CV.pdf" id="Skills">
          Downlond My CV <UilDownloadAlt />
        </a>
      </Button>
    </section>
  );
};

export default About;
