import { useRef, useEffect, useState } from "react";

import Button from "../ui/button";
import classes from "./events-search.module.css";


function EventSearch({ onSearch }: { onSearch: (year: any, month: any) => void }) {
    const yearInputRef = useRef<HTMLSelectElement | null>(null);
    const monthInputRef = useRef<HTMLSelectElement | null>(null);
    const [selectedYear, setSelectedYear] = useState<string>('');
    const [selectMonth, setSelectMonth] = useState<string>('')
    const submitHandler = (e: any) => {
        e.preventDefault();
        if (selectedYear && selectMonth) {
            onSearch(selectedYear, selectMonth);
        }
    };
    useEffect(() => {
        if (yearInputRef.current) {
            setSelectedYear(yearInputRef.current.value);
        }
        if (monthInputRef.current) {
            setSelectMonth(monthInputRef.current.value)
        }
    }, []);

    const handleYearChange = () => {
        if (yearInputRef.current) {
            setSelectedYear(yearInputRef.current.value);
        }
        if (monthInputRef.current) {
            setSelectMonth(monthInputRef.current.value)
        }
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef} onChange={handleYearChange}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Year</label>
                    <select id="month" ref={monthInputRef} onChange={handleYearChange}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>Search</Button>
        </form>
    );
}

export default EventSearch;
