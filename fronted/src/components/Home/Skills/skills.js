import { UilBracketsCurly } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilServerConnection } from "@iconscout/react-unicons";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../App";
import Skill from "./skill";

import style from "./skills.module.css";

const backendArray = [
  { name: "Node-Js", percent: 70 },
  { name: "Next-Js", percent: 90 },
  { name: "MongoDB", percent: 70 },
  { name: "SQL", percent: 65 },
];
const frontedArray = [
  { name: "Html", percent: 80 },
  { name: "Css", percent: 70 },
  { name: "JavaScript", percent: 90 },
  { name: "React-Hooks", percent: 90 },
];

const Skills = () => {
  const [toggleFronted, setToggelFronted] = useState(false);
  const [toggleBackend, setToggelBackend] = useState(false);
  const [showListFronted, setShowListFronted] = useState(false);
  const [showListBackend, setShowListBackend] = useState(false);
  
  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";

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
        <h2 className={theme ? style["skills-title-dark"] : style["skills-title"]}>Skills</h2>
        <br />
        <span className={style["skills-subtitle"]}>My tecnical level</span>
      </div>
      <div>
        <div>
          <div className={style.header}>
            <i className={theme ? style["icon-dark"] : style.icon}>
              <UilBracketsCurly />
            </i>
            <h1 style={theme ? {color:'darkorange'} : {color:'black'}}>Fronted Development</h1>
            <button onClick={toggleFrontedHandler} className={theme ? style["icon-dark"] : style.icon}>
              <UilAngleDown />
            </button>
          </div>
          <div
            className={toggleFronted ? style["list-open"] : style["list-close"]}
          >
            {showListFronted && (
              <div>
                {frontedArray.map((item, index) => (
                  <Skill key={index} name={item.name} percent={item.percent} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className={style.header}>
            <i className={theme ? style["icon-dark"] : style.icon}>
              <UilServerConnection />
            </i>
            <h1 id="Qualification" style={theme ? {color:'darkorange'} : {color:'black'}}>Beckend Development</h1>
            <button onClick={toggleBeckendHandler} className={theme ? style["icon-dark"] : style.icon}>
              <UilAngleDown />
            </button>
          </div>

          <div
            className={toggleBackend ? style["list-open"] : style["list-close"]}
          >
            {showListBackend && (
              <div>
                {backendArray.map((item, index) => (
                  <Skill key={index} name={item.name} percent={item.percent} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
