import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { BiSliderAlt } from 'react-icons/bi'

// import { FormFilterModal } from './form-filter-modal'

export const ModalLogin = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <section className="modal-filter">
      <Button variant="primary" onClick={handleShow}>
        <BiSliderAlt /> Filter
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-filter">
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/* <FormFilterModal /> */}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Show Stays
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Show Stays
          </Button> */}
        </Modal.Footer>
      </Modal>
    </section>
  )
}
