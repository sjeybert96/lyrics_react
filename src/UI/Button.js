import styles from "./Button.module.css";
const Button = (props) => {
  return <button type="submit">{props.name}</button>;
};

export default Button;
