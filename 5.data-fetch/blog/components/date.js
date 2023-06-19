import { parseISO, format } from "date-fns";

export default function Date(dateString) {
    dateString = '2023-06-16';
    console.log('时间:');
    console.log('时间:' + dateString);

    const date = parseISO(dateString);

    return <time dateTime={dateString}> {format(date, 'LLLL ,d yyyy')} </ time>;
}