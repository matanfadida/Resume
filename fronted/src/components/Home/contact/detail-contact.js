import { UilMobileAndroid } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

import style from "./detail-contact.module.css";

const DetailContact = () => {
  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";

  return (
    <div className={style.box}>
      <ul className={style.ul}>
        <li>
          <i className={theme ? style["icon-dark"] : style.icon}>
            <UilMobileAndroid />
          </i>
          <div className={style["div-phone"]}>
            <h3 className={theme ? style["title-dark"] : style.title}>Phone</h3>
            <span className={theme ? style["subtitle-dark"] : style.subtitle}>
              052-5305623
            </span>
          </div>
        </li>
        <li>
          <i className={theme ? style["icon-dark"] : style.icon}>
            <UilEnvelopeAlt />
          </i>
          <div>
            <h3 className={theme ? style["title-dark"] : style.title}>Email</h3>
            <span className={theme ? style["subtitle-dark"] : style.subtitle}>
              matanfadida7@gmail.com
            </span>
          </div>
        </li>
        <li>
          <i className={theme ? style["icon-dark"] : style.icon}>
            <UilMapMarker />
          </i>
          <div>
            <h3 className={theme ? style["title-dark"] : style.title}>
              Location
            </h3>
            <span className={theme ? style["subtitle-dark"] : style.subtitle}>
              Be'er Sheva - Israel
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DetailContact;
