import classes from './error-alert.module.css';

// TODO
function ErrorAlert(props: any) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
