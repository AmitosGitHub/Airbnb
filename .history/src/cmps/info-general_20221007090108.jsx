import { React } from 'react'

export const StayDetails = () => {
  return (
    <div>
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
            Some info has been automatically translated. Show original language
          </h3>
          <p>
            For those who don't want to put a mortgage on overnight
            accommodation in the wild... this is not a bungalow, this is my
            shooting studio, but when I'm not teaching or shooting, you can stay
            in it for a modest price. Accommodation on mattresses in one space
            full of windows to the beautiful and green nature. Privacy, quiet,
            inspiring. Comptest amenities, kitchenette, outdoor shower and in
            simple style...
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
    </div>
  )
}
