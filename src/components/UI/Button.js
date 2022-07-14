import style from './Button.module.css';

const Button = (props) => {
    return <button className={style.button}>{props.children}</button>
}

export default Button;

