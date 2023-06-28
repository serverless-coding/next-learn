import { Event } from "@/dummy-data";
import style from './event-item.module.css'
import Image from "next/image";
import DateIcon from '../icons/date-icon'
import Button from "../ui/button";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem({ event }: { event: Event }) {

    let date = new Date(event.date).toLocaleDateString("zh-CN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
    let address = event.location.replace(", ", "\n")
    let exploreLink = `events/${event.id}`

    return (
        <li key={event.id} className={style.item}>
            <Image src={`/${event.image}`} alt={event.title} width={200} height={150} />
            <div className={style.content}>
                <div className={style.summary}>
                    <h2>{event.title}</h2>
                    <div className={style.date}>
                        <DateIcon />
                        <time>{date}</time>
                    </div>
                    <div className={style.address}>
                        <AddressIcon />
                        <address>{address}</address>
                    </div>
                </div>

                <div className={style.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Events</span>
                        <span className={style.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li >
    )
}

export default EventItem;