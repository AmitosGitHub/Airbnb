import { event } from 'jquery'
import { React } from 'react'
import { useEffect, useState } from 'react'

import { CircularStatic } from '../cmps/circular-static'

export const ReserveDetails = ({ selectedStay, user }) => {
  const [isOpenGuests, setIsOpenGuests] = useState(false)
  const [isOpenCircularStatic, setIsOpenCircularStatic] = useState(false)
  const [isOpenModalReserve, setIsOpenModalReserve] = useState(false)
  const [dates, setDates] = useState({
    checkIn: '',
    checkOut: '',
  })

  useEffect(() => {
    setIsOpenGuests(false)
    console.log('isOpenGuests:', isOpenGuests)
  }, [])

  const openModalGuests = () => {
    console.log('vkmfdkvmeofv,')
  }

  const setDateReserve = (ev) => {
    ev.preventDefault()
    const target = ev.target
    const field = target.name
    const value = target.value
    setDates((prevSetDates) => ({
      ...prevSetDates,
      [field]: value,
    }))
  }

  const getCountNights = () => {
    const fromDate = dates.checkIn
    const toDate = dates.checkOut
    let nights = 1
    if (fromDate && toDate) {
      const startDate = new Date(fromDate)
      const endDate = new Date(toDate)
      const diffDate = (endDate - startDate) / (1000 * 60 * 60 * 24)
      nights = diffDate
    }

    return nights
  }

  const getPricePerNights = () => {
    return selectedStay.price * getCountNights()
  }
  const getTotalPrice = () => {
    return getPricePerNights() + 90
  }
  const doReserve = () => {
    console.log('isOpenModalReserve', isOpenModalReserve)
    setIsOpenModalReserve(!isOpenModalReserve)
    console.log('isOpenCircularStatic:', isOpenCircularStatic)
    setIsOpenCircularStatic(!isOpenCircularStatic)
    setTimeout(() => {
      setIsOpenCircularStatic(!isOpenCircularStatic)
    }, 7000)
  }

  return (
    <section>
      <div className="reserve-header-price">
        <h2>
          ${selectedStay.price} <span>night</span>
        </h2>
        <h3>
          ⭑ 5.0 <span> {selectedStay.reviews.length} reviews</span>
        </h3>
      </div>

      <div className="reserve-date-picker">
        <div className="reserve-date-picker-check-in-out">
          <div className="reserve-date-picker-check-date">
            <h2>CHECK-IN</h2>
            <input
              type="date"
              placeholder="Add date"
              name="checkIn"
              value={dates.checkIn}
              onChange={setDateReserve}
            />
          </div>
          <div className="reserve-date-picker-check-date">
            <h2>CHECKOUT</h2>
            <input
              type="date"
              placeholder="Add date"
              name="checkOut"
              value={dates.checkOut}
              onChange={setDateReserve}
            />
          </div>
        </div>
        <div
          className="reserve-date-picker-guests"
          onClick={() => {
            openModalGuests()
          }}
        >
          <h2>GUESTS</h2>
          <h3>1 guest</h3>
        </div>
      </div>

      <div className="btn-reserve">
        <button
          className="btn-reserve"
          onClick={() => {
            doReserve()
          }}
        >
          Reserve
        </button>
        <h3>You won't be charged yet</h3>
      </div>

      <div className="summary-reserve">
        <div className="calculate-nights">
          <h3>
            ${selectedStay.price} x {getCountNights()} nights
          </h3>
          <h4> ${getPricePerNights()}</h4>
        </div>

        <div className="calculate-cleaning">
          <h3>Cleaning fee</h3>
          <h4>$30</h4>
        </div>

        <div className="calculate-service">
          <h3>Service fee</h3>
          <h4>₪$60</h4>
        </div>

        <div className="calculate-total">
          <h3>Total</h3>
          <h4>${getTotalPrice()}</h4>
        </div>
      </div>
      {isOpenModalReserve && (
        <div className="modalReserve">
          {isOpenCircularStatic && <CircularStatic />}
          <h3>Total</h3>
          <h4>${getTotalPrice()}</h4>
        </div>
      )}
    </section>
  )
}
