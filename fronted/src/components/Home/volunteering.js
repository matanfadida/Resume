import { UilArrowRight } from "@iconscout/react-unicons";

import style from "./volunteering.module.css";
import Button from "../UI/Button";

const Volunteering = () => {
  return (
    <section>
      <div className={style.volunteering}>
        <div>
          <h2 className={style["volunteering-title"]} id="volunteering">
            Volunteering
          </h2>
          <br />
          <span className={style["volunteering-subtitle"]}>
            isef scholarship, Beer Sheva
          </span>
        </div>
        <div className={style["image-text"]}>
          <div className={style.img}>
            <img
              className={style.imgae}
              src="matan-ex-co-1.png"
              alt="ex-1"
              height={300}
              width={500}
            />
          </div>
          <div className={style.text}>
            <p>
              Promoting integration of youth from the social and geographical
              periphery in high-tech, in the comprehensive school in the city of
              Beer Sheva under the guidance of HTML JS at a basic level combined
              with EX-CO.
            </p>
            <Button>
              <a href="https://www.isef.org.il/">
                Isef{" "}
                <i className={style.icon}>
                  <UilArrowRight />
                </i>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
