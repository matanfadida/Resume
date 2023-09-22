import Button from "../../UI/Button";

import style from "./form.module.css";

import { UilNavigator } from "@iconscout/react-unicons";

const Form = (props) => {
  const { submitHandler, emailHandler, titleHandler, messageHandler, Loding } =
    props;
  return (
    <form onSubmit={submitHandler}>
      <div className={style.div}>
        <div className={style["div_title_email"]}>
          <ul className={style.ul}>
            <li>
              <label>You'r Email</label>
              <input
                type="email"
                onChange={emailHandler}
              />
            </li>
            <li>
              <label>Title</label>
              <input
                type="text"
                onChange={titleHandler}
              />
            </li>
          </ul>
        </div>
        <div className={style.contact}>
          <label>Message</label>
          <textarea
            className={style["contact-input"]}
            onChange={messageHandler}
            defaultChecked="10"
          />
        </div>
      </div>
      <div className={style["div-button"]}>
        {!Loding ? (
          <Button onSubmit={submitHandler}>
            Send Email{" "}
            <i className={style["send-icon"]}>
              <UilNavigator />
            </i>
          </Button>
        ) : (
          <Button>Loding..</Button>
        )}
      </div>
    </form>
  );
};

export default Form;
