import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import greece from '../../assets/img/img-map/greece.webp'
import america from '../../assets/img/img-map/america.webp'
import italy from '../../assets/img/img-map/italy.webp'
import middle from '../../assets/img/img-map/middle.webp'
import us from '../../assets/img/img-map/us.webp'
import flexible from '../../assets/img/img-map/flexible.jpeg'

export const ModalMapFilter = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <section className="modal-map-filter">
      <h1 className="title-map-filter">Search by region</h1>
      <div className="gallery-img-filter">
        <article className="card-filter-map">
          <Link to={`/stay/explore/greece`}>
            <img src={greece} />
            <h4>Greece</h4>
          </Link>
        </article>
        <article className="card-filter-map">
          <Link to={`/stay/explore/US`}>
            <img src={america} />
            <h4>South America</h4>
          </Link>
        </article>
        <article className="card-filter-map">
          <Link to={`/stay/explore/italy`}>
            <img src={italy} />
            <h4>Italy</h4>
          </Link>
        </article>
        <article className="card-filter-map">
          <Link to={`/stay/explore/turkey`}>
            <img src={middle} />
            <h4>Middle East</h4>
          </Link>
        </article>
        <article className="card-filter-map">
          <Link to={`/stay/explore/US`}>
            <img src={us} />
            <h4>United States</h4>
          </Link>
        </article>
        <article className="card-filter-map">
          <Link to={`/stay/explore/us`}>
            <img src={flexible} />
            <h4>I'm flexible</h4>
          </Link>
        </article>
      </div>
    </section>
  )
}
