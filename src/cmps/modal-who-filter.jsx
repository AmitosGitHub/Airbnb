import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


const flatpickr = require('flatpickr')

// import { FormFilterModal } from './form-filter-modal'

export const WhoFilter = () => {
  const [show, setShow] = useState(false)
  const [dataWho, setDataWho] = useState({
    adults:0,
    children:0,
    infants:0,
    pets:0,
  })

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
 
  const counterWho =(type , val )=>{
    const value = val==='increment'?dataWho[type]+1:dataWho[type]-1
    setDataWho(
    (prevDataWho)=>({
      ...prevDataWho,
      [type]:value
    })
    )
  }
  return (
    <div className="modal-who">
      <section className="calendar-filter">
        <Button variant="primary" onClick={handleShow}>
          <h3>Who</h3>
          <h4>Add guests</h4>
        </Button>

        <Modal show={show} onHide={handleClose} className="modal-who">
          <Modal.Header closeButton>
          </Modal.Header>

          <Modal.Body>
            <section className="modal-who-body">
              <article className="Adults">
              <div className="descreption-who ">
                <h3>Adults</h3>
                <h4>Ages 13 or above</h4>
              </div>
              <div className="counter-who">
              <CounterWho type={'adults'}  counterWho={counterWho} num={dataWho.adults}/>
              </div>
              </article>
              <article className="Children">
              <div className="descreption-who ">
                <h3>Children</h3>
                <h4>Ages 2–12</h4>
              </div>
              <div className="counter-who">
              <CounterWho type={'children'}  counterWho={counterWho} num={dataWho.children}/>
              </div>
              </article>
              <article className="Infants">
              <div className="descreption-who ">
                <h3>Infants</h3>
                <h4>Under 2</h4>
              </div>
              <div className="counter-who">
              <CounterWho type={'infants'}  counterWho={counterWho} num={dataWho.infants}/>
              </div>
              </article>
              <article className="Pets">
              <div className="descreption-who ">
                <h3>Pets</h3>
                <h4>Bringing a service animal?</h4>
              </div>
              <div className="counter-who">
              <CounterWho type={'pets'}  counterWho={counterWho} num={dataWho.pets}/>
              </div>
              </article>
            </section>

          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Exact dates
            </Button> */}
            {/* <Button variant="primary" onClick={handleClose}>
            Show Stays
          </Button> */}
          </Modal.Footer>
        </Modal>
      </section>
    </div>
  )
}

const CounterWho = ({type , counterWho ,num})=>{

  return(
    <section className="counter-who">
    <button onClick={()=>{counterWho(type ,'increment')}}>+</button>
    <span>{num}</span>
    <button onClick={()=>{counterWho(type ,'decrement')}}>-</button>
    </section>
  )
}
