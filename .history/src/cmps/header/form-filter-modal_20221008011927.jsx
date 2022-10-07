import * as React from 'react'
import ReactDOM from 'react-dom'
import { pink } from '@mui/material/colors'
import Checkbox from '@mui/material/Checkbox'
import { Component } from 'react'
import 'rheostat/initialize'
import 'rheostat/css/rheostat.css'
import Rheostat from 'rheostat'

import { FilterPriceRange } from './filter-price-range'

import Apartment from '../assets/img/img-modal-filter/Apartment.jpeg'
import House from '../assets/img/img-modal-filter/House.jpeg'
import Hotel from '../assets/img/img-modal-filter/Hotel.jpeg'
import Guesthouse from '../assets/img/img-modal-filter/Guesthouse.jpeg'
// import {RangeSlider,} from '@appbaseio/reactivesearch';

export const FormFilterModal = ({ setDataFilterBy, filterBy }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const onSelectedTypeHouse = (element) => {
    setDataFilterBy('room', 'roomType', element)
  }

  const onSelectedBedAndRoom = (element, num) => {
    setDataFilterBy('room', element, num)
  }
  const onSelectedCheackBox = (element) => {
    setDataFilterBy('amenities', element)
  }

  const getRoomsBeds = (element) => {
    return (
      <div>
        <h3 className="title-element">{element}</h3>
        <button
          className="btn btn-room any"
          onClick={() => {
            onSelectedBedAndRoom(element, 0)
          }}
        >
          Any
        </button>
        <button
          className="btn btn-room"
          onClick={() => {
            onSelectedBedAndRoom(element, 1)
          }}
        >
          1
        </button>
        <button
          className="btn btn-room"
          onClick={() => {
            onSelectedBedAndRoom(element, 2)
          }}
        >
          2
        </button>
        <button
          className="btn btn-room"
          onClick={() => {
            onSelectedBedAndRoom(element, 3)
          }}
        >
          3
        </button>
        <button
          className="btn btn-room"
          onClick={() => {
            onSelectedBedAndRoom(element, 4)
          }}
        >
          4
        </button>
        <button
          className="btn btn-room"
          onClick={() => {
            onSelectedBedAndRoom(element, 5)
          }}
        >
          5
        </button>
        <button
          className="btn btn-room"
          onClick={() => {
            onSelectedBedAndRoom(element, 6)
          }}
        >
          6
        </button>
        <button
          className="btn btn-room"
          onClick={() => {
            onSelectedBedAndRoom(element, 7)
          }}
        >
          7
        </button>
        <button
          className="btn btn-room"
          onClick={() => {
            onSelectedBedAndRoom(element, 8)
          }}
        >
          8+
        </button>
      </div>
    )
  }
  const getFilterPropertyType = () => {
    return (
      <div>
        <button
          className="btn btn-proerty-type"
          onClick={() => {
            onSelectedTypeHouse('house')
          }}
        >
          <img src={House} />
          <h3>House</h3>
        </button>
        <button
          className="btn btn-proerty-type"
          onClick={() => {
            onSelectedTypeHouse('apartment')
          }}
        >
          <img src={Apartment} />
          <h3>Apartment</h3>
        </button>
        <button
          className="btn btn-proerty-type"
          onClick={() => {
            onSelectedTypeHouse('guesthouse')
          }}
        >
          <img src={Guesthouse} />
          <h3>Guesthouse</h3>
        </button>
        <button
          className="btn btn-proerty-type"
          onClick={() => {
            onSelectedTypeHouse('hotel')
          }}
        >
          <img src={Hotel} />
          <h3>Hotel</h3>
        </button>
      </div>
    )
  }

  return (
    <section className="main-form-filter">
      <article className="price-range">
        <PriceRange />
      </article>

      <article className="rooms-and-beds">
        <article>{getRoomsBeds('Bedrooms')}</article>
        <article>{getRoomsBeds('Beds')}</article>
        <article> {getRoomsBeds('Bathrooms')}</article>
      </article>

      <article className="property-type">
        <h1>Property type</h1>
        {getFilterPropertyType()}
      </article>

      <article className="amenities">
        <h1>Amenities</h1>
        <h3>Essentials</h3>
        <div className="container-amenities">
          <div className="btn-checkbox wifi">
            <Checkbox
              {...label}
              className="box-checkbox"
              defaultChecked
              color="default"
              checked={filterBy.amenities.Wifi}
              onClick={() => {
                onSelectedCheackBox('Wifi')
              }}
            />
            <label htmlFor="wifi">Wifi</label>
          </div>
          <div className="btn-checkbox washer">
            <Checkbox
              {...label}
              defaultChecked
              color="default"
              checked={filterBy.amenities.Washer}
              onClick={() => {
                onSelectedCheackBox('Washer')
              }}
            />
            <label htmlFor="washer">Washer</label>
          </div>
          <div className="btn-checkbox air-conditioning">
            <Checkbox
              {...label}
              defaultChecked
              color="default"
              checked={filterBy.amenities.AirConditioning}
              onClick={() => {
                onSelectedCheackBox('AirConditioning')
              }}
            />
            <label htmlFor="air-conditioning">Air conditioning</label>
          </div>
          <div className="btn-checkbox kitchen">
            <Checkbox
              {...label}
              defaultChecked
              color="default"
              checked={filterBy.amenities.Kitchen}
              onClick={() => {
                onSelectedCheackBox('kitchen')
              }}
            />
            <label htmlFor="kitchen">Kitchen</label>
          </div>
        </div>
      </article>
    </section>
  )
}

export const PriceRange = (props) => {
  return (
    <div className="PriceRange">
      <h3>Price Range</h3>
      <Rheostat
        min={1}
        max={1000}
        values={[100, 300]}
        pitComponent={'span'}
        pitPoints={[100, 200, 300, 400, 500, 600, 700, 800, 900]}
      />
    </div>
  )
}

//   const PriceRange = () => {
//   return (
//   <div className="PriceRange">
//     <h3>Price Range</h3>
// <RangeSlider
//   componentId="RangeSliderSensor"
//   dataField="guests"
//   title="Guests"
//   range={{
//     "start": 0,
//     "end": 10
//   }}
//   defaultValue={{
//     "start": 1,
//     "end": 5
//   }}
//   rangeLabels={{
//     "start": "Start",
//     "end": "End"
//   }}
//   stepValue={1}
//   showHistogram={true}
//   showFilter={true}
//   interval={2}
//   react={{
//     and: ["CategoryFilter", "SearchFilter"]
//   }}
//   URLParams={false}
// />
// </div>)
// }
