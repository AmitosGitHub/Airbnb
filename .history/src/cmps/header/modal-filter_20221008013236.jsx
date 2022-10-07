import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { BiSliderAlt } from 'react-icons/bi'

import { getCountStays, loadStays } from '../store/stay.actions.js'
import { FormFilterModal } from '../header/form-filter-modal'

export const ModalFilter = () => {
  const { countStays } = useSelector((state) => state.stayModule)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [filterBy, setFilterBy] = useState({
    amenities: {
      Wifi: false,
      Washer: false,
      AirConditioning: false,
      Kitchen: false,
    },
    price: 0,
    room: { bathrooms: 0, bedrooms: 0, roomType: '' },
  })

  const [show, setShow] = useState(false)

  const setCountStays = () => {
    dispatch(getCountStays(filterBy))
  }
  useEffect(() => {
    console.log('Counter Mounted filterBy', filterBy)
    return
    setFilterBy({
      amenities: {
        Wifi: false,
        Washer: false,
        AirConditioning: false,
        Kitchen: false,
      },
      price: 0,
      room: { bathrooms: 0, bedrooms: 0, roomType: '' },
    })
  }, [])

  useEffect(() => {
    console.log('Counter Mounted filterBy', filterBy)
    setCountStays()
    console.log('countStays.length:', countStays.length)
  }, [filterBy])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // const navigate = useNavigate()

  const setDataFilterBy = (type, element, val = null) => {
    console.log(type, element.toLowerCase(), val)
    let value = null
    if (val || val === 0) {
      value = typeof val === 'number' ? +val : val
      element = element.toLowerCase()
    } else {
      value = !filterBy[type][element]
      //  console.log(' value:', value)
    }
    setFilterBy((prevFilterBy) => ({
      ...prevFilterBy,
      [type]: { ...prevFilterBy[type], [element]: value },
    }))
  }

  const sendQueryParams = () => {
    navigate(`stay/explore/amenities/Wifi=${filterBy.amenities.Wifi}&&Washer=${filterBy.amenities.Washer}&&AirConditioning=${filterBy.amenities.AirConditioning}
      &&Kitchen=${filterBy.amenities.Kitchen}/room/bathrooms=${filterBy.room.bathrooms}&&bedrooms=${filterBy.room.bedrooms}&&roomType=${filterBy.room.roomType}`)
  }

  return (
    <section className="modal-filter">
      <Button variant="primary" onClick={handleShow}>
        <BiSliderAlt /> Filter
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-filter">
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormFilterModal
            setDataFilterBy={setDataFilterBy}
            filterBy={filterBy}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            onClick={() => {
              sendQueryParams()
            }}
          >
            Show +<span>{countStays.length}</span> homes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  )
}
