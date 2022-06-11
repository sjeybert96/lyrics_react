import React, { useState, useEffect } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const [inputValue, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState(false);

  const Focus = (e) => {
    setPlaceholder(true);

    e.target.placeholder = "";
  };
  const Blur = (e) => {
    if (inputValue.length === 0) {
      setPlaceholder(false);
      e.target.placeholder = props.input.placeholder;
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    props.dispatch({
      type: "onChange",
      field: props.input.id,
      value: inputValue,
    });
  }, [inputValue]);
  return (
    <div className={classes["input-wrapper"]}>
      <div>
        <div className={classes["input-label-wrapper"]}>
          <span className={`${placeholder ? classes.label : classes.hidden}`}>
            {props.input.placeholder}
          </span>
          <input
            className={classes["input-element"]}
            {...props.input}
            autoComplete="off"
            value={inputValue}
            onClick={Focus}
            onBlur={Blur}
            onChange={onChange}
          />
          <div className={classes.hidden}>Mandatory Field</div>
        </div>
      </div>
    </div>
  );
};

export default Input;
