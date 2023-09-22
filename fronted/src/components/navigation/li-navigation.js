import style from "./main-navigation.module.css";
import { UilMoon, UilSun } from "@iconscout/react-unicons";
import { HashLink as NavLink } from "react-router-hash-link";

const LiNav = (props) => {
  const {
    themeStatus,
    theme,
    activeAbout,
    activeSkills,
    activeContact,
    activeHome,
    activeWork,
    conTheme,
  } = props;

  return (
    <>
      <li>
        <NavLink
          to="#top"
          smooth
          className={
            activeHome ? themeStatus : theme ? style["a-dark"] : style.a
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#About"
          smooth
          className={
            activeAbout ? themeStatus : theme ? style["a-dark"] : style.a
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#Work"
          smooth
          className={
            activeWork ? themeStatus : theme ? style["a-dark"] : style.a
          }
        >
          Work
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#Skills"
          smooth
          className={
            activeSkills ? themeStatus : theme ? style["a-dark"] : style.a
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#Contact"
          smooth
          className={
            activeContact ? themeStatus : theme ? style["a-dark"] : style.a
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        {theme ? (
          <i>
            <UilSun onClick={conTheme.toggleThemeHandler} />
          </i>
        ) : (
          <i>
            <UilMoon onClick={conTheme.toggleThemeHandler} />
          </i>
        )}
      </li>
    </>
  );
};

export default LiNav;
