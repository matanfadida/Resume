import style from "./contact.module.css";

import { UilMobileAndroid } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";
import { UilNavigator } from "@iconscout/react-unicons";
import { useState } from "react";
import Button from "../UI/Button";

const Contact = () => {
  const [errorTitle, setErrorTitle] = useState(false);
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const senedEmail = {
      subject: title,
      email: email,
      message: message,
    };
    if (title === "") {
      setErrorTitle(true);
    }
    const respons = fetch("/sendEmail", {
      method: "POST",
      body: JSON.stringify(senedEmail),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = respons.JSON();
    console.log(data);
  };

  return (
    <section className={style["section-contact"]}>
      <div>
        <h2 className={style["contact-title"]} id="Contact">
          Contact Me
        </h2>
        <br />
        <span className={style["contact-subtitle"]}>Get in touch</span>
      </div>
      <br />
      <div className={style.continer}>
        <div className={style.box}>
          <div className={style.detail}>
            <i className={style.icon}>
              <UilMobileAndroid />
            </i>
            <div>
              <h3 className={style.title}>Phone</h3>
              <br />
              <span className={style.subtitle}>052-5305623</span>
            </div>
          </div>
          <div className={style.detail}>
            <i className={style.icon}>
              <UilEnvelopeAlt />
            </i>
            <div>
              <h3 className={style.title}>Email</h3>
              <br />
              <span className={style.subtitle}>matanfadida7@gmail.com</span>
            </div>
          </div>
          <div className={style.detail}>
            <i className={style.icon}>
              <UilMapMarker />
            </i>
            <div>
              <h3 className={style.title}>Location</h3>
              <br />
              <span className={style.subtitle}>Be'er Sheva - Israel</span>
            </div>
          </div>
        </div>
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
            <Button onSubmit={submitHandler}>
              Send Email{" "}
              <i className={style["send-icon"]}>
                <UilNavigator />
              </i>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
