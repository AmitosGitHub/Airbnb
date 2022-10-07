import { React } from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import { userService } from '../services/user.service'
import { utilService } from '../services/util.service'
import { DetailsCalendar } from '../cmps/details/details-calendar'
import { HeaderDetails } from '../cmps/details/header-details'
import { ReserveDetails } from '../cmps/details/reserve-details'
import { InfoGeneral } from '../cmps/details/info-general'
import { DatePicker } from '../cmps/details/date-picker'
import { DetailsReviews } from '../cmps/details/details-reviews'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getStayById } from '../store/stay.actions.js'
import PulseLoader from 'react-spinners/PulseLoader'

export const StayDetails = () => {
  const { selectedStay } = useSelector((state) => state.stayModule)
  const { user } = useSelector((state) => state.userModule)
  const params = useParams().id
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getStayById(params))
    console.log('selectedStay', selectedStay)
    console.log(' user:', user)
  }, [])

  useEffect(() => {
    console.log('selectedStay', selectedStay)
  }, [selectedStay])

  console.log('selectedStay:', selectedStay)
  if (!selectedStay) {
    return (
      <section className="sweet-loading">
        <PulseLoader color="#99a8a4" margin={7} size={16} />
      </section>
    )
  }
  return (
    <section className="stay-details main-layout">
      <section className="header-details">
        <HeaderDetails selectedStay={selectedStay} />
      </section>

      <section className="container-details-descreption-reserve">
        <div className="details-content-descreption">
          <InfoGeneral selectedStay={selectedStay} />
          <div className="date-picker">
            <DatePicker />
          </div>
        </div>

        <div className="details-content-reserve">
          <ReserveDetails selectedStay={selectedStay} user={user} />
        </div>
      </section>

      <section className="container-reviews">
        <DetailsReviews selectedStay={selectedStay} />
      </section>
    </section>
  )
}
