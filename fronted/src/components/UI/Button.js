import style from './Button.module.css';

const Button = (props) => {
    const styles = `${style.button} ${props.className}`
    return <button onClick={props.onSubmit} className={styles}>{props.children}</button>
}

export default Button;