import { useContext, useEffect, useState } from "react";
import style from "./main-navigation.module.css";
// import { UilAlignJustify } from '@iconscout/react-unicons';
import { UilMoon } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";
import { ThemeContext } from "../../App";
// import { NavLink } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';

const MainNavigation = () => {
  const conTheme = useContext(ThemeContext);
  const [navbar, setNavbar] = useState(true);
  const theme = conTheme.theme === "dark";
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeSkills, setActiveSkills] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const [activeHome, setActiveHome] = useState(false);

  // const [showIconMain, setShowIconMain] = useState(false);

  const themeStatus = theme ? `${style["a-dark"]} ${style["active-dark"]}` : `${style.a} ${style.active} `


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

  const navBarState = () => {
    if(window.scrollY > 118 && window.scrollY < 577){
      setActiveAbout(true);
      setActiveHome(false);
      setActiveSkills(false);
    }
    if(window.scrollY > 577 && window.scrollY < 1420){
      setActiveSkills(true);
      setActiveAbout(false);
      setActiveContact(false);
    }
    if(window.scrollY > 1420 && window.scrollY < 1630){
      setActiveContact(true);
      setActiveSkills(false);
      setActiveAbout(false);
    }
    if(window.scrollY < 118){
      setActiveHome(true);
      setActiveAbout(false);
      setActiveContact(false);
      setActiveSkills(false);
    }
  }
  
  useEffect(()=> {
    navBarState();
    window.addEventListener("scroll",navBarState)
  })

  return (
    <header>
      <nav
        className={navbar ? style.nav : style["nav-move"]}
        style={
          theme
            ? { backgroundColor: "rgb(18, 17, 17)", color: "darkorange" }
            : null
        }
      >
        <h2 className={style.h2}>Fadida Matan</h2>
        <ul className={style.ul}>
          <li className={style.li}>
            <NavLink to="#top" smooth className={activeHome ? themeStatus : theme ? style["a-dark"] : style.a}>
              Home
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink to="#About" smooth className={activeAbout ? themeStatus : theme ? style["a-dark"] : style.a}>
              About
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink to="#Skills" smooth className={activeSkills ? themeStatus : theme ? style["a-dark"] : style.a}>
              Skills
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink to="#Contact" smooth className={activeContact ? themeStatus : theme ? style["a-dark"] : style.a}>
              Contact
            </NavLink>
          </li>
          {theme ? (
            <i className={style.icon}>
              <UilSun onClick={conTheme.toggleThemeHandler} />
            </i>
          ) : (
            <i className={style.icon}>
              <UilMoon onClick={conTheme.toggleThemeHandler} />
            </i>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
