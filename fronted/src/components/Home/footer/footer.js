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
      <ul className={style.ul}>
        <li>
          <h1 className={style["footer-title"]}>Matan</h1>
          <span className={style["footer-subtitle"]}>Development</span>
        </li>
        <li>
          <ul className={style["footer-list"]}>
            <li>
              <a
                href="#About"
                className={
                  theme ? style["footer-link-dark"] : style["footer-link"]
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Work"
                className={
                  theme ? style["footer-link-dark"] : style["footer-link"]
                }
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                className={
                  theme ? style["footer-link-dark"] : style["footer-link"]
                }
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#Qualification"
                className={
                  theme ? style["footer-link-dark"] : style["footer-link"]
                }
              >
                Qualification
              </a>
            </li>
            <li>
              <a
                href="#Social Activities"
                className={
                  theme ? style["footer-link-dark"] : style["footer-link"]
                }
              >
                Social Activities
              </a>
            </li>
          </ul>
        </li>
        <li>
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
        </li>
      </ul>
      {/* <div className={theme ? style["contact-dark"] : style.contact}>
          <div>
            <br />
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
        </div> */}
      <p className={style.p}>&#169; All right reserved</p>
    </footer>
  );
};

export default Footer;
