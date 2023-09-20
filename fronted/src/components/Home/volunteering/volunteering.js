import { UilArrowRight } from "@iconscout/react-unicons";

import style from "./volunteering.module.css";
import Button from "../../UI/Button";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Volunteering = () => {
  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";

  return (
    <section>
      <div>
        <h2
          className={
            theme
              ? style["volunteering-title-dark"]
              : style["volunteering-title"]
          }
          id="volunteering"
        >
          Social Activities
        </h2>
        <br />
        <span className={style["volunteering-subtitle"]}>
          isef scholarship, Beer Sheva
        </span>
      </div>
      <div className={style.div}>
          <img
            className={style.imgae}
            src="matan-ex-co-1.png"
            alt="ex-1"
            height={300}
            width={500}
          />
        <div className={style["div_text"]}>
          <ul className={style["ul-first"]}>
            <li><h3 className={style.job}>Leadership program scholarship recipient | ISEF scholarship</h3></li>
            <ul>
              <li>
                The leadership program includes personal and professional development, acquisition of tools and skills, diverse training, and 
                social action. The program operates to reduce gaps in Israeli society by promoting higher education for young people from 
                the socio-geographic periphery.
              </li>
            </ul>
            <li><h3 className={style.job}>Leadership program scholarship recipient | ISEF scholarship</h3></li>
            <ul>
              <li>
                  Learning HTML and JS at a basic level for 15 students
              </li>
            </ul>
          </ul>
          <Button className={style["button-margin"]}>
            <a href="https://www.isef.org.il/">
              Isef{" "}
              <i className={style.icon}>
                <UilArrowRight />
              </i>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
