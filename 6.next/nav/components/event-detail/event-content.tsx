import classes from './event-content.module.css';

// TODO
function EventContent(props: any) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
