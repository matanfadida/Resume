import Button from "./Button";
import Card from "./Card";

import { UilTimesCircle } from "@iconscout/react-unicons";
import { UilCheckCircle } from "@iconscout/react-unicons";

import style from "./pop-message.module.css";

const PopMessage = (props) => {
  const { icon, title, text } = props;

  const styles = icon === 'X' ? style["header-error"] : style["header-work"];
  const iconShow = icon === 'X' ? <UilTimesCircle size='50' color='rgb(194, 31, 31)'/> : <UilCheckCircle size='50' color='rgb(17, 170, 17)'/>

  const closeAndShowHandler = () => {
    props.onClick();
  }

  return (
    <div>
      <div className={style.backdrop} onClick={closeAndShowHandler}/>
      <Card className={style.modal}>
        <header className={styles}>
          <h2 className={style.h2}>{title}</h2>
        </header>
        <div className={style.icon}>
          {iconShow}
        </div>
        <div className={style.content}>
          <p className={style.text}>{text}</p>
        </div>
        <footer className={style.actions}>
          <Button onSubmit={closeAndShowHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default PopMessage;
