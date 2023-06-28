import { Event } from '@/dummy-data'
import classes from './event-logistics.module.css'
import Image from 'next/image'
import LogisticsItem from './logistics-item'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'

// TODO:
export default function EventLogistics(props: any & { event: Event }) {
    let event = props.event
    const date = new Date(event.date).toLocaleDateString('zh-CN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let address = event.location.replace(', ', '\n')
    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <Image src={`/${event.image}`} alt={event.title} width={200} height={150} />
            </div>
            <ul className={classes.list}>
                <LogisticsItem icon={DateIcon}>
                    <time>{date} {event.date}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon} >
                    <address>{address}</address>
                </LogisticsItem>
            </ul>
        </section>
    )
}