import style from './Button.module.css';

const Button = (props) => {
    return <button onClick={props.onSubmit} className={style.button}>{props.children}</button>
}

export default Button;

