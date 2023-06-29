import Link from "next/link";
import classes from "./button.module.css";
import { ReactElement, ReactNode } from "react";

function Button(props: {
  children?: JSX.Element | JSX.Element[] | string,
  link?: string,
  title?: string,
  onClick?: () => void
}) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <span className={classes.btn}>
          {props.children}
        </span>
      </Link>
      //equal  <Link href={props.link} className={classes.btn} >{props.children}</Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
