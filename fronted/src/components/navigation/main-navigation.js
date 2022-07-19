import { useEffect, useState } from "react";
import style from "./main-navigation.module.css";

const MainNavigation = () => {

  const [navbar, setNavbar] = useState(true);

  const changeBackground = () => {
    console.log(window.scrollY);
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
      <nav className={navbar ? style.nav : style["nav-move"]}>
        <h2 className={style.h2}>Fadida Matan</h2>
        <ul  className={style.ul}>
          <li className={style.li}>
            <a href="#top" className={style.a}>
              Home
            </a>
          </li>
          <li className={style.li}>
            <a href="#About" className={style.a}>
              About
            </a>
          </li>
          <li className={style.li}>
            <a href="#Skills" className={style.a}>
              Skills
            </a>
          </li>
          <li className={style.li}>
            <a href="#Contact" className={style.a}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
