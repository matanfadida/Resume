import Button from "../../UI/Button";

import style from './form.module.css';

import { UilNavigator } from "@iconscout/react-unicons";

const Form = (props) => {
    const {submitHandler, emailHandler, titleHandler, messageHandler, Loding} = props
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className={style["email-title"]}>
          <div className={style.contact}>
            <label className={style.contact}>You'r Mail</label>
            <input
              className={style["contact-input"]}
              type="email"
              onChange={emailHandler}
            />
          </div>
          <div className={style.contact}>
            <label type="text">Title</label>
            <input
              className={style["contact-input"]}
              type="text"
              onChange={titleHandler}
            />
          </div>
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
