import style from "./footer.module.css";

import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.contact}>
        <div>
          <div>
            <h1 className={style["footer-title"]}>Matan</h1>
            <br />
            <span className={style["footer-subtitle"]}>Development</span>
          </div>
          <div className={style["list-and-social"]}>
            <ul className={style["footer-list"]}>
              <li>
                <a href="#about" className={style["footer-link"]}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className={style["footer-link"]}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#qualification" className={style["footer-link"]}>
                  Qualification
                </a>
              </li>
            </ul>
            <div className={style["socials-media"]}>
              <a
                href="https://www.facebook.com/matanfadida"
                className={style["social-link"]}
              >
                <UilFacebookF />
              </a>
              <a
                href="https://www.instagram.com/matanfadida/"
                className={style["social-link"]}
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
