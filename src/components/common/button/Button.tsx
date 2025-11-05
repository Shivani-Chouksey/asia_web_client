import { ReactNode } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export interface ButtonProps {
  children: ReactNode;
  btnStyle: "primary" | "secondary" | "text" | "small";
  type?: "submit" | "button";
  disabled?: boolean;
  navigation?: boolean;
  navigationUrl?: string;
  onClick?: any;
}

function Button(props: ButtonProps) {
  return props.navigation ? (
    <Link
      className={`${styles.btn} ${styles[props.btnStyle]}`}
      to={props.navigationUrl as string}
    >
      {props.children}
    </Link>
  ) : (
    <button
      className={`${styles.btn} ${styles[props.btnStyle]}`}
      disabled={props.disabled}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
