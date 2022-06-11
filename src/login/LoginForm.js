import Button from "../UI/Button";
import Input from "../UI/Input";

import { useReducer } from "react";
import { login } from "../API/login";

const reducer = (state, action) => {
  if (action.type === "onChange") {
    console.log(action.type, action.field);
    return { ...state, [action.field]: action.value };
  }
};

const LoginForm = (props) => {
  const [formData, dispatch] = useReducer(reducer, null);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    login({
      method: "POST",
      body: JSON.stringify(formData),
    });
  };
  return (
    <form className={props.className} onSubmit={onSubmit}>
      <div className={props.styles.title}>SIGN IN</div>
      <Input
        input={{ type: "text", id: "email", placeholder: "Email" }}
        dispatch={dispatch}
      />
      <Input
        type="password"
        input={{ type: "password", id: "password", placeholder: "Password" }}
        dispatch={dispatch}
      />
      <Button name="Read" />
    </form>
  );
};

export default LoginForm;
