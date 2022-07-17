import style from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <header>
      <nav className={style.nav}>
        <h2>Fadida Matan</h2>
        <ul  className={style.ul}>
          <li>
            <a href="#top" className={style.li}>
              Home
            </a>
          </li>
          <li>
            <a href="#About" className={style.li}>
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className={style.li}>
              Skills
            </a>
          </li>
          <li>
            <a href="#Contact" className={style.li}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
