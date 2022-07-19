import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

import style from "./qualification.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { UilGraduationCap } from "@iconscout/react-unicons";
import { UilCalendarAlt } from "@iconscout/react-unicons";
import { useState } from "react";

const Qualification = () => {
  const [showEducation, setShowEducation] = useState(false);

  const showEducationHandler = () => {
    setShowEducation(!showEducation);
  };

  return (
    <section className={style.section}>
      <div>
        <h2 className={style["qualification-title"]} id="Qualification">qualification</h2>
        <br/>
        <span className={style["qualification-subtitle"]}>My prsonal journey</span>
      </div>

      <div>
        <div className={style.education}>
          <i className={style["icon-color"]}>
            <UilGraduationCap />
          </i>
          <button onClick={showEducationHandler} className={style.button}>
            <i>Education</i>
          </button>
        </div>
        {showEducation && (
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className={style.data}>
              <SwiperSlide>
                <div className={style.detail}>
                  <h3>software engineer</h3>
                  <span>Sami-Samhoon - Beer Shave</span>
                  <div className={style["icon-date"]}>
                    <i className={style["icon-color"]}>
                      <UilCalendarAlt />
                    </i>
                    <i className={style["date-color"]}>10/2019 - Now</i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.detail}>
                  <h3>React - Hooks</h3>
                  <span>Udemy - Maximilian Schwarzmüller</span>
                  <div className={style["icon-date"]}>
                    <i className={style["icon-color"]}>
                      <UilCalendarAlt />
                    </i>
                    <i className={style["date-color"]}>10/2021</i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.detail}>
                  <h3>NextJs</h3>
                  <span>Udemy - Maximilian Schwarzmüller</span>
                  <div className={style["icon-date"]}>
                    <i className={style["icon-color"]}>
                      <UilCalendarAlt />
                    </i>
                    <i className={style["date-color"]}>03/2022</i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.detail}>
                  <h3>NodeJs</h3>
                  <span>Udemy - Maximilian Schwarzmüller</span>
                  <div className={style["icon-date"]}>
                    <i className={style["icon-color"]}>
                      <UilCalendarAlt />
                    </i>
                    <i className={style["date-color"]}>07/2022 - Now</i>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Qualification;
