import style from './qualification.module.css';

import { UilGraduationCap } from "@iconscout/react-unicons";
import { UilCalendarAlt } from "@iconscout/react-unicons";

const Qualification = () => {
  return (
    <section className={style.section}>
      <h2>qualification</h2>
      <span>My prsonal journey</span>
      <div>
        <div>
          <i>
            <UilGraduationCap />
          </i>
          <i>Education</i>
        </div>
        <div>
          <div>
            <div className={style.detail}>
              <h3>software engineer</h3>
              <span>Sami-Samhoon - Beer Shave</span>
              <div className={style["icon-date"]}>
                <i>
                  <UilCalendarAlt />
                </i>
                <i>2019 - 2023</i>
              </div>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div>
            <div>
              <h3>React - Hooks</h3>
              <span>Udemy - Maximilian Schwarzmüller</span>
              <div className={style["icon-date"]}>
                <i>
                  <UilCalendarAlt />
                </i>
                <i>2020</i>
              </div>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div>
            <div>
              <h3>NextJs</h3>
              <span>Udemy - Maximilian Schwarzmüller</span>
              <div className={style["icon-date"]}>
                <i>
                  <UilCalendarAlt />
                </i>
                <i>2020</i>
              </div>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div>
            <div>
              <h3>NodeJs</h3>
              <span>Udemy - Maximilian Schwarzmüller</span>
              <div className={style["icon-date"]}>
                <i>
                  <UilCalendarAlt />
                </i>
                <i>2022 - Now</i>
              </div>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
