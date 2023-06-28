import { Event } from "@/dummy-data";
import classes from './event-list.module.css'
import EventItem from "./event-item";
const EventList = (props: { items: Event[] }) => {
    return (
        <ul className={classes.list}>
            {props.items.map((event) => {
                return (
                    <EventItem key={event.id} event={event} />
                );
            })}
        </ul>
    );
};

export default EventList;