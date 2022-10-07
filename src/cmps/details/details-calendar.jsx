import React, { useEffect,useState } from 'react'
import { addDays, format } from 'date-fns'
import { DateRange, DayPicker } from 'react-day-picker'


const pastMonth = new Date(2020, 10, 15)

export const DetailsCalendar=()=> {
  let  DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4)
  }
  // const [range, setRange] = useState( <DateRange/> );
  const [range, setRange] = useState(DateRange)

  useEffect(()=>{
     DateRange = {
      from: range.from,
      to: range.to
    }
    console.log('new render....')
},[range])


  let footer = <p>Please pick the first day.</p>
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      )
    }
  }

  return (
    <section className="details-calendar">
    <DayPicker
      mode="range"
      defaultMonth={pastMonth}
      selected={range}
      footer={footer}
      onSelect={setRange}
      numberOfMonths={2} 
      pagedNavigation
    />
    </section>
  )
}