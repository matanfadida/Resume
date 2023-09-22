import { UilAngleDown } from "@iconscout/react-unicons";
import { UilServerConnection } from "@iconscout/react-unicons";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../App";
import Skill from "./skill";

import style from "./skills.module.css";

const backendArray = [
  { name: "Node-Js", text: "Experienced in building robust server-side applications using Node.js and Express. Proficient in developing RESTful APIs, and middleware, and handling routing efficiently. Skilled in optimizing server performance and ensuring scalability" },
  { name: "React-Hooks", text: "develop modern web applications. Proficient in state management, component lifecycle, building interactive UIs, and making GET and POST requests to APIs for data interaction. Skilled in optimizing performance for enhanced user experiences, and adept at MongoDB for efficient data storage and retrieval." },
  { name: "C#, .Net Core", text: "OOP, development of multi-threaded applications while implementing synchronization principles and working with encryption. Use of Design Patterns, Skilled in SQL Server for efficient database management and integration within C# applications." },
  { name: "JavaScript - JQuery", text: "Proficient in creating interactive web applications, extensive experience in server-side scripting, and DOM manipulation. Skilled in building responsive and dynamic user interfaces." },
  { name: "Python", text: "Work with advanced librarieslike pyspark, pandas, nltk, graphframes. Building a data retrieval engine that includes a large corpus of 6 million Wikipedia documents, using natural language processing (NLP) techniques andGCP." },
];

const Skills = () => {
  const [toggleBackend, setToggelBackend] = useState(false);
  const [showListBackend, setShowListBackend] = useState(false);
  
  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";

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
              <UilServerConnection />
            </i>
            <h1 id="Qualification" style={theme ? {color:'darkorange'} : {color:'black'}}>Programming Languages and Professional Knowledge</h1>
            <button onClick={toggleBeckendHandler} className={theme ? style["icon-dark"] : style.icon}>
              <UilAngleDown />
            </button>
          </div>

          <div
            className={toggleBackend ? style["list-open"] : style["list-close"]}
          >
            {showListBackend && (
              <ul className={style.ul}>
                {backendArray.map((item, index) => (
                  <Skill key={index} name={item.name} text={item.text} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
