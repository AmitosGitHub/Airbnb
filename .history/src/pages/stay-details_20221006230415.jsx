import { React } from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import { userService } from '../services/user.service'
import { utilService } from '../services/util.service'
import { DetailsCalendar } from '../cmps/details-calendar'
import { HeaderDetails } from '../cmps/header-details'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getStayById } from '../store/stay.actions.js'
import PulseLoader from 'react-spinners/PulseLoader'

export const StayDetails = () => {
  const { selectedStay } = useSelector((state) => state.stayModule)
  const params = useParams().id
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getStayById(params))
    console.log('selectedStay', selectedStay)
  }, [])

  useEffect(() => {
    console.log('selectedStay', selectedStay)
  }, [selectedStay])

  console.log('selectedStay:', selectedStay)
  if (!selectedStay)
    return (
      <section className="sweet-loading">
        <PulseLoader color="#99a8a4" margin={7} size={16} />
      </section>
    )
  return (
    <section className="stay-details main-layout">
      <section className="header-details">
        <HeaderDetails />
      </section>
      <section className="header-details">
        <div className="top-header-details-descreption">
          <h2>name of place</h2>
        </div>

        <div className="bottom-header-details-btn-action">
          <div className="bottom-header-details-descreption">
            <h4>city-country</h4>
          </div>
          <div className="details-btn-action">
            <div className="btn-link link-share">
              <h2>img</h2>
              <button className="btn btn-details-action">Share</button>
            </div>

            <div className="btn-link link-save">
              <h2>img</h2>
              <button className="btn btn-details-action">Save</button>
            </div>
          </div>
        </div>
      </section>

      <section className="details-gallery">
        <div className="img-center">
          <img src={selectedStay.imgUrls[0]} />
        </div>
        <div className="img-2">
          <img src={selectedStay.imgUrls[1]} />
        </div>
        <div className="img-3">
          <img src={selectedStay.imgUrls[2]} />
        </div>
        <div className="img-4">
          <img src={selectedStay.imgUrls[3]} />
        </div>
        <div className="img-5">
          <img src={selectedStay.imgUrls[4]} />
        </div>
      </section>

      <section className="container-details-descreption-reserve">
        <div className="details-content-descreption">
          <div className="details-hosted">
            <div className="details-hosted-by">
              <h2>
                Entire place hosted by <span>{selectedStay.host.fullname}</span>
              </h2>
              <ul>
                <li>{selectedStay.capacity} guests</li>
                <li>{selectedStay.bedrooms} bedroom</li>
                <li>{selectedStay.bathrooms} bath</li>
              </ul>
            </div>
            <div className="details-hosted-avatar">
              <img src={selectedStay.host.imgUrl} />
            </div>
          </div>

          <div className="air-cover">
            <h1>
              <span>air</span>cover
            </h1>
            <p>
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </p>
          </div>

          <div className="more-info">
            <h3>
              Some info has been automatically translated. Show original
              language
            </h3>
            <p>
              For those who don't want to put a mortgage on overnight
              accommodation in the wild... this is not a bungalow, this is my
              shooting studio, but when I'm not teaching or shooting, you can
              stay in it for a modest price. Accommodation on mattresses in one
              space full of windows to the beautiful and green nature. Privacy,
              quiet, inspiring. Comptest amenities, kitchenette, outdoor shower
              and in simple style...
            </p>
          </div>

          <div className="offers-amenities">
            <h3>What this place offers</h3>
            <ul>
              {selectedStay.amenities.map((item) => (
                <li className="preview-amenities" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="date-picker">
            <h3>5 nights in Crikvenica</h3>
            <h5>Oct 6, 2022 - Oct 11, 2022</h5>
            <DetailsCalendar />
          </div>
        </div>

        <div className="details-content-reserve">
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
            <div className="reserve-date-picker-guests">
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
        </div>
      </section>

      <section className="container-reviews">
        {selectedStay.reviews.map((review) => (
          <div className="preview-review" key={review.by._id}>
            <div className="preview-review-by">
              <div className="preview-review-by-avatar">
                <img className="img-avatar" src={review.by.imgUrl} />
              </div>
              <div className="preview-review-by-descreption">
                <h2>{review.by.fullname}</h2>
                <h3>{review.at}</h3>
              </div>
            </div>

            <div className="preview-review-txt">
              <p>{review.txt}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}
