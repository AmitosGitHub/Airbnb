import React, { ChangeEventHandler, useState ,useEffect,} from 'react'

import { format, isAfter, isBefore, isValid, parse } from 'date-fns'
import {DateRange,DayPicker,SelectRangeEventHandler} from 'react-day-picker'

export const ModalCalendarFilter=({getCheckInOut})=> {
  const [selectedRange, setSelectedRange] = useState(new Date)
  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')

  useEffect(() => {
    getCheckInOut({
        checkIn:fromValue,
        checkOut:toValue,
      })
  },[fromValue,toValue])

  const handleFromChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFromValue(e.target.value)
    const date = parse(e.target.value, 'y-MM-dd', new Date())
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined })
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date })
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to })
    }
  }

  const handleToChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setToValue(e.target.value)
    const date = parse(e.target.value, 'y-MM-dd', new Date())

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined })
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from })
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date })
    }
  }

  const handleRangeSelect: SelectRangeEventHandler = (
    range: DateRange | undefined
  ) => {
    setSelectedRange(range)
    if (range?.from) {
      setFromValue(format(range.from, 'y-MM-dd'))
    } else {
      setFromValue('')
    }
    if (range?.to) {
      setToValue(format(range.to, 'y-MM-dd'))
    } else {
      setToValue('')
    }
  }

  return (
    <section className="modal-calendar-filter">
    <DayPicker 
      mode="range"
      selected={selectedRange}
      onSelect={handleRangeSelect}
      footer={
        <form className="ma2">
          <input
            size={10}
            placeholder="From Date"
            value={fromValue}
            onChange={handleFromChange}
            className="input-reset pa2 ma bg-white black ba"
          />
          {' ??? '}
          <input
            size={10}
            placeholder="To Date"
            value={toValue}
            onChange={handleToChange}
            className="input-reset pa2 bg-white black ba"
          />
        </form>
      }
    />
    </section>
  )
}