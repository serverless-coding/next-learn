import Layout from "@/components/layout";
import { getAllEvents } from '../../dummy-data'
import EventItem from "@/components/events/event-item";
import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/events-search";
import { useRouter } from "next/router";
function EventPage() {
    const es = getAllEvents()
    let router = useRouter()
    const searchHandler = (year: number, month: number) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    };
    return (
        <Layout>
            <div>
                <EventSearch onSearch={searchHandler} />
                <EventList items={es} />
            </div>
        </Layout>
    )
}

export default EventPage;