import moment from "moment";
import "../assets/styles/cmps/react_dates_overrides.css"

// import "./styles.css";
// import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import { useState } from "react";
// import "react-dates/lib/css/_datepicker.css";

export default function App() {
    const [startDate, setStartDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const [endDate, setEndDate] = useState(null)

    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
      };


    return (
        // <div className="date-range-picker">   
            <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={handleDatesChange} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
                showClearDates={true}
                // small={true}
                startDatePlaceholderText='Add date'
                endDatePlaceholderText='Add date'
                startDateAriaLabel=''
                customArrowIcon={' '}
                noBorder
                // id="datetime-local"
                // name="endDate"
                // label="End date"
                // data-testid="input-end-date"
                // type="date"
                // InputLabelProps={{ shrink: true }}

/>
        // </div> 
    ) 
} 