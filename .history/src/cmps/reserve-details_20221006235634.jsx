import { React } from 'react'
import { useEffect, useState } from 'react'

export const ReserveDetails = ({ selectedStay }) => {
  //  const { isOpenGuests , setIsOpenGuests} = useState((false)

  //  useEffect(() => {
  //      setIsOpenGuests(false)
  //      console.log('isOpenGuests:',isOpenGuests)
  //  }, [])

  //    openModalGuests = () => {
  //     console.log('vkmfdkvmeofv,')
  //   }

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
            <input type="date" placeholder="Add date" />
          </div>
          <div className="reserve-date-picker-check-date">
            <h2>CHECKOUT</h2>
            <input type="date" placeholder="Add date" />
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
        <button className="btn-reserve">Reserve</button>
        <h3>You won't be charged yet</h3>
      </div>

      <div className="summary-reserve">
        <div className="calculate-nights">
          <h3>₪262 x 5 nights</h3>
          <h4>₪1,310</h4>
        </div>

        <div className="calculate-cleaning">
          <h3>Cleaning fee</h3>
          <h4>₪50</h4>
        </div>

        <div className="calculate-service">
          <h3>Service fee</h3>
          <h4>₪192</h4>
        </div>

        <div className="calculate-total">
          <h3>Total</h3>
          <h4>₪1552</h4>
        </div>
      </div>
    </section>
  )
}
