import { UilBracketsCurly } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilServerConnection } from "@iconscout/react-unicons";
import { useEffect, useState } from "react";

import style from "./skills.module.css";

const Skills = () => {
  const [toggleFronted, setToggelFronted] = useState(false);
  const [toggleBackend, setToggelBackend] = useState(false);
  const [showListFronted, setShowListFronted] = useState(false);
  const [showListBackend, setShowListBackend] = useState(false);

  const toggleFrontedHandler = () => {
    setToggelFronted(!toggleFronted);
    if (toggleFronted) {
      setTimeout(() => {
        setShowListFronted(!showListFronted);
      }, 3000);
    } else {
      setShowListFronted(true);
    }
  };

  const toggleBeckendHandler = () => {
    setToggelBackend(!toggleBackend);
    if (toggleBackend) {
      setTimeout(() => {
        setShowListBackend(!showListBackend);
      }, 3000);
    } else {
      setShowListBackend(true);
    }
  };

  return (
    <section className={style.section}>
      <div>
        <h2 className={style["skills-title"]} id="Skills">
          Skills
        </h2>
        <br />
        <span className={style["skills-subtitle"]}>My tecnical level</span>
      </div>

      <div>
        <div>
          <div className={style.header}>
            <i className={style.icon}>
              <UilBracketsCurly />
            </i>
            <h1>Fronted Development</h1>
            <button onClick={toggleFrontedHandler} className={style.icon}>
              <UilAngleDown />
            </button>
          </div>
          <div
            className={toggleFronted ? style["list-open"] : style["list-close"]}
          >
            {showListFronted && (
              <div>
                <div>
                  <div className={style["skills-name"]}>
                    <h3>Html</h3>
                    <span className={style.number}>80%</span>
                  </div>
                  <div className={style.bar}>
                    <span
                      className={`${style.precentags} ${style.html}`}
                    ></span>
                  </div>
                </div>
                <div>
                  <div className={style["skills-name"]}>
                    <h3>Css</h3>
                    <span className={style.number}>70%</span>
                  </div>
                  <div className={style.bar}>
                    <span className={`${style.precentags} ${style.css}`}></span>
                  </div>
                </div>
                <div>
                  <div className={style["skills-name"]}>
                    <h3>JavaScript</h3>
                    <span className={style.number}>90%</span>
                  </div>
                  <div className={style.bar}>
                    <span className={`${style.precentags} ${style.js}`}></span>
                  </div>
                </div>
                <div>
                  <div className={style["skills-name"]}>
                    <h3>React-Hooks</h3>
                    <span className={style.number}>90%</span>
                  </div>
                  <div className={style.bar}>
                    <span
                      className={`${style.precentags} ${style.react}`}
                    ></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className={style.header}>
            <i className={style.icon}>
              <UilServerConnection />
            </i>
            <h1>Beckend Development</h1>
            <button onClick={toggleBeckendHandler} className={style.icon}>
              <UilAngleDown />
            </button>
          </div>

          <div
            className={toggleBackend ? style["list-open"] : style["list-close"]}
          >
            {showListBackend && (
              <div>
                <div>
                  <div className={style["skills-name"]}>
                    <h3>Node-Js</h3>
                    <span className={style.number}>70%</span>
                  </div>
                  <div className={style.bar}>
                    <span
                      className={`${style.precentags} ${style.node}`}
                    ></span>
                  </div>
                </div>
                <div>
                  <div className={style["skills-name"]}>
                    <h3>Next-Js</h3>
                    <span className={style.number}>90%</span>
                  </div>
                  <div className={style.bar}>
                    <span
                      className={`${style.precentags} ${style.next}`}
                    ></span>
                  </div>
                </div>
                <div>
                  <div className={style["skills-name"]}>
                    <h3>MongoDB</h3>
                    <span className={style.number}>70%</span>
                  </div>
                  <div className={style.bar}>
                    <span
                      className={`${style.precentags} ${style.mongo}`}
                    ></span>
                  </div>
                </div>
                <div>
                  <div className={style["skills-name"]}>
                    <h3>SQL</h3>
                    <span className={style.number}>65%</span>
                  </div>
                  <div className={style.bar}>
                    <span className={`${style.precentags} ${style.sql}`}></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
