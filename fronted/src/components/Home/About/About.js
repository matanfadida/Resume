
import style from "./about.module.css";

import { UilDownloadAlt } from "@iconscout/react-unicons";
import { UilArrowUp } from '@iconscout/react-unicons';
import Button from "../../UI/Button";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../App";

const About = () => {
  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";
  const [scroll, setScroll] = useState(false);
  const changeBackground = () => {
    if(window.scrollY > 0){
      setScroll(false);
    }
    else{
      setScroll(true);
    }
  }

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll",changeBackground);
  })

  const styles = scroll ? style.scrollUp : style["show-scroll"]
  const stylesDark = scroll ? style["scrollUp-dark"] : style["show-scroll-dark"]

  return (
    <section className={style.section}>
      <div>
        <h2 className={theme ? style["about-title-dark"] : style["about-title"]}>About Me</h2>
        <br />
        <span className={style["about-subtitle"]}>My introduction</span>
      </div>

      <p>
      Motivated software engineer with a proven track record, strong work ethic, and proficiency in diverse technologies. Experienced in successfully 
delivering projects on time and within budget. Skilled in collaborative teamwork and known for fostering a culture of innovation. Committed to 
excellence in software development and continually exploring emerging technologies to drive cutting-edge solutions.
      </p>
      <Button>
        <a download="" href="Matan_Fadida_CV.pdf" id="Skills">
          Downlond My CV <UilDownloadAlt />
        </a>
      </Button>
      <a href="#top" className={theme ? stylesDark : styles}><UilArrowUp/></a>
    </section>
  );
};

export default About;
