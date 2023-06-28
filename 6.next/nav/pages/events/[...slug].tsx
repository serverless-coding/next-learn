import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/error-alert/error-alert";


function FilteredEventsPage() {
    let router = useRouter()
    let filterData = router.query.slug
    if (!filterData) {
        return <ErrorAlert><p className='text-center'>Loding...</p></ErrorAlert>
    }

    let y = Number.parseFloat(filterData[0])
    let m = Number.parseFloat(filterData[1])
    let numYear = +y
    let numMonth = +m

    console.log("select:", numYear, numMonth)

    if (isNaN(numYear) || isNaN(numMonth) || numMonth > 12 || numMonth < 1 ||
        numYear > 2030 || numYear < 2021) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invalid Filter. Please adjust your value:{numYear}-{numMonth}</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No events found for the chosen filters!:{numYear}-{numMonth}</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }
    const date = new Date(numYear, numMonth - 1);
    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
}

export default FilteredEventsPage;