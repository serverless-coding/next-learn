import ErrorAlert from "@/components/error-alert/error-alert";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Layout from "@/components/layout";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function EventDetailPage() {
    const router = useRouter()
    const eId = router.query.id as string
    const event = getEventById(eId)
    if (!event) {
        return (
            <ErrorAlert><p>No Event Found</p></ErrorAlert>
        )
    }
    return (
        <Layout>
            <Fragment>
                <EventSummary title={event.title} />
                <EventLogistics event={event} />
                <EventContent>
                    <p>{event.description}</p>
                </EventContent>
            </Fragment>
        </Layout>
    )
}

export default EventDetailPage;