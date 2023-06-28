import Link from "next/link";
import classes from "./button.module.css";
import { ReactElement, ReactNode } from "react";

function Button(props: any & { link: string, title: string }) {
  if (props.link) {
    return (
      // TODO 
      // <Link href={props.link}>
      //   <a className={classes.btn}>{props.children}</a>
      // </Link>
      <Link href={props.link} className={classes.btn} >{props.children} {props.title}</Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
