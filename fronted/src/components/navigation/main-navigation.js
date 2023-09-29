import { useContext, useEffect, useRef, useState } from "react";
import style from "./main-navigation.module.css";
import LiNav from "./li-navigation";

import { UilMultiply, UilBars } from "@iconscout/react-unicons";
import { ThemeContext } from "../../App";

const MainNavigation = () => {
  const conTheme = useContext(ThemeContext);
  const [navbar, setNavbar] = useState(true);
  const theme = conTheme.theme === "dark";
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeWork, setActiveWork] = useState(false);
  const [activeSkills, setActiveSkills] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const [activeHome, setActiveHome] = useState(false);
  const [showSideManu, setShowSideManu] = useState(false);
  const ulMovile = useRef();
  const ulMovileDiv = useRef();

  const themeStatus = theme
    ? `${style["a-dark"]} ${style["active-dark"]}`
    : `${style.a} ${style.active} `;

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const UpdateLocation = (location) => {
      setActiveAbout(location === 'about');
      setActiveHome(location === 'home');
      setActiveSkills(location === 'skills');
      setActiveWork(location === 'work');
      setActiveContact(location === 'contect')
  }
  const navBarState = () => {
    var pageHigh = document.documentElement.scrollHeight;
    if (window.scrollY > 118 && window.scrollY < 577) {
      UpdateLocation('about');
    }
    if (window.scrollY > 577 && window.scrollY < 900) {
      UpdateLocation('work');
    }
    if (window.scrollY > 900 && window.scrollY < 1990) {
      UpdateLocation('skills');
    }
    if (pageHigh === 4651 && window.scrollY > 2990 && window.scrollY < 3600) {
      UpdateLocation('contect');
    }
    if (pageHigh === 3763 && window.scrollY > 1990 && window.scrollY < 3600) {
      UpdateLocation('contect');
    }
    if (window.scrollY < 118) {
      UpdateLocation('home');
    }
  };

  useEffect(() => {
    navBarState();
    window.addEventListener("scroll", navBarState);
    window.addEventListener("touchmove", navBarState);
  });

  const OpenManuSideHandler = (e) => {
    setShowSideManu(true);
    ulMovile.current.classList.remove("display_none");
  };

  const CloseManuSideHandler = () => {
    setShowSideManu(false);
    setTimeout(() => {
      ulMovile.current.classList.add("display_none");
    }, [1900]);
  };

  var styleDark = theme
    ? { backgroundColor: "rgb(18, 17, 17)", color: "darkorange" }
    : null;

  return (
    <header
      className={navbar ? style["nav"] : style["nav-move"]}
      style={styleDark}
    >
      <div>
        <ul className={style["ul-first"]}>
          <li className={style.phone}>
            <UilBars onClick={OpenManuSideHandler} />
            <div
              ref={ulMovileDiv}
              className={
                showSideManu
                  ? `${style["manu-side-show"]}`
                  : `${style["manu-side-hidden"]}`
              }
              style={styleDark}
            >
              <ul
                ref={ulMovile}
                className={`${style["ul-menu-side"]} display_none`}
              >
                <li className={style.close}>
                  <UilMultiply onClick={CloseManuSideHandler} />
                </li>
                <LiNav
                  themeStatus={themeStatus}
                  theme={theme}
                  activeAbout={activeAbout}
                  activeSkills={activeSkills}
                  activeContact={activeContact}
                  activeHome={activeHome}
                  conTheme={conTheme}
                  activeWork={activeWork}
                />
              </ul>
            </div>
          </li>
          <li className={style["full-screen"]}>
            <ul className={style["ul-second"]}>
            <LiNav
                  themeStatus={themeStatus}
                  theme={theme}
                  activeAbout={activeAbout}
                  activeSkills={activeSkills}
                  activeContact={activeContact}
                  activeHome={activeHome}
                  conTheme={conTheme}
                  activeWork={activeWork}
                />
            </ul>
          </li>
          <li>
            <h2 className={style.h2}>Matan Fadida</h2>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainNavigation;
