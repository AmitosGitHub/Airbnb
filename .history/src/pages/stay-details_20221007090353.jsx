import { React } from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import { userService } from '../services/user.service'
import { utilService } from '../services/util.service'
import { DetailsCalendar } from '../cmps/details-calendar'
import { HeaderDetails } from '../cmps/header-details'
import { ReserveDetails } from '../cmps/reserve-details'
import { InfoGeneral } from '../cmps/info-general'

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
        <HeaderDetails selectedStay={selectedStay} />
      </section>

      <section className="container-details-descreption-reserve">
        <div className="details-content-descreption">
          <InfoGeneral selectedStay={selectedStay} />
          <div className="date-picker">
            <h3>5 nights in Crikvenica</h3>
            <h5>Oct 6, 2022 - Oct 11, 2022</h5>
            <DetailsCalendar />
          </div>
        </div>

        <div className="details-content-reserve">
          <ReserveDetails selectedStay={selectedStay} />
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
