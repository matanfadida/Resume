import Button from "./Button";
import Card from "./Card";

import style from "./pop-message.module.css";

const PopMessage = (props) => {
  const { title, text } = props;
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{title}</h2>
      </header>
      <div className={style.content}>
        <p>{text}</p>
      </div>
      <footer className={style.action}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default PopMessage;
