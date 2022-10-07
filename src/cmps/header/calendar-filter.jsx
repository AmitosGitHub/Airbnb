import { Component, React } from 'react'

import { DateRangePicker } from 'react-date-range'

import { addDays } from 'date-fns'
import { useState } from 'react'

export const CalendarFilter = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])

  return (
    <DateRangePicker
      className="calendar-filter"
      onChange={(item) => setState([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
    />
  )
}
