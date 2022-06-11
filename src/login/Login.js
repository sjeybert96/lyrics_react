import LoginForm from "./LoginForm";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles["login_page_wrapper"]}>
      <LoginForm className={styles["form_wrapper"]} styles={styles} />
    </div>
  );
};

export default Login;
