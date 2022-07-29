import style from "./footer.module.css";

import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Footer = () => {
  
  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";
  
  return (
    <footer className={theme ? style["footer-dark"] : style.footer}>
      <div>
        <div className={theme ? style["contact-dark"] : style.contact}>
          <div>
            <h1 className={style["footer-title"]}>Matan</h1>
            <br />
            <span className={style["footer-subtitle"]}>Development</span>
          </div>
          <div className={style["list-and-social"]}>
            <ul className={style["footer-list"]}>
              <li>
                <a href="#About" className={theme ? style["footer-link-dark"] : style["footer-link"]}>
                  About
                </a>
              </li>
              <li>
                <a href="#Skills" className={theme ? style["footer-link-dark"] : style["footer-link"]}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#Qualification" className={theme ? style["footer-link-dark"] : style["footer-link"]}>
                  Qualification
                </a>
              </li>
            </ul>
            <div className={style["socials-media"]}>
              <a
                href="https://www.facebook.com/matanfadida"
                className={theme ? style["social-link-dark"] : style["social-link"]}
              >
                <UilFacebookF />
              </a>
              <a
                href="https://www.instagram.com/matanfadida/"
                className={theme ? style["social-link-dark"] : style["social-link"]}
                target="blank"
              >
                <UilInstagram />
              </a>
            </div>
          </div>
        </div>
        <p>&#169; All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
