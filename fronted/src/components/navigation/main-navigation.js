import { useContext, useEffect, useState } from "react";
import style from "./main-navigation.module.css";
// import { UilAlignJustify } from '@iconscout/react-unicons';
import { UilMoon } from '@iconscout/react-unicons';
import { UilSun } from '@iconscout/react-unicons';
import { ThemeContext } from "../../App";

const MainNavigation = () => {

  const conTex = useContext(ThemeContext);
  const [navbar, setNavbar] = useState(true);
  const themeState = conTex.theme === 'dark';
  // const [showIconMain, setShowIconMain] = useState(false);
  console.log(conTex)

  const changeBackground = () => {
    if(window.scrollY > 0){
      setNavbar(false);
    }
    else{
      setNavbar(true);
    }
  }

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll",changeBackground);
  })

  return (
    <header>
      <nav className={navbar ? style.nav : style["nav-move"]} style={themeState ? {backgroundColor:'#212121', color:"darkorange"} : null}>
        <h2 className={style.h2}>Fadida Matan</h2>
        <ul  className={style.ul}>
          <li className={style.li}>
            <a href="#top" className={themeState ? style["a-dark"] : style.a}>
              Home
            </a>
          </li>
          <li className={style.li}>
            <a href="#About" className={themeState ? style["a-dark"] : style.a}>
              About
            </a>
          </li>
          <li className={style.li}>
            <a href="#Skills" className={themeState ? style["a-dark"] : style.a}>
              Skills
            </a>
          </li>
          <li className={style.li}>
            <a href="#Contact" className={themeState ? style["a-dark"] : style.a}>
              Contact
            </a>
          </li>
          <i className={style.icon}><UilMoon onClick={conTex.toggleThemeHandler}/></i>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
