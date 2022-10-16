import { React } from 'react'
import { useEffect, useState } from 'react'

export const InfoGeneral = ({ selectedStay }) => {
  const [isMoreAmenities, setIsMoreAmenities] = useState(false)

  useEffect(() => {
    console.log(isMoreAmenities)
    return setIsMoreAmenities(false)
  }, [])

  useEffect(() => {
    console.log(isMoreAmenities)
  }, [isMoreAmenities])

  const onMoreAmenities = () => {
    setIsMoreAmenities(!isMoreAmenities)
  }

  return (
    <div>
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
          For those who don't want to put a mortgage on overnight accommodation
          in the wild... this is not a bungalow, this is my shooting studio, but
          when I'm not teaching or shooting, you can stay in it for a modest
          price. Accommodation on mattresses in one space full of windows to the
          beautiful and green nature. Privacy, quiet, inspiring. Comptest
          amenities, kitchenette, outdoor shower and in simple style...
        </p>
      </div>

      <div className="offers-amenities">
        <h3>What this place offers</h3>
        {selectedStay.amenities.map((item, idx) => (
          <ul>
            {(idx < 10 || isMoreAmenities) && (
              <li className="preview-amenities" key={item}>
                {item}
              </li>
            )}
          </ul>
        ))}
        <div className="container-btn-amenities">
          {!isMoreAmenities && selectedStay.amenities.length > 10 && (
            <button
              className="btn btn-more-amenities"
              onClick={() => {
                onMoreAmenities()
              }}
            >
              Show all {selectedStay.amenities.length} amenities
            </button>
          )}
          {isMoreAmenities && selectedStay.amenities.length > 10 && (
            <button
              className="btn btn-more-amenities"
              onClick={() => {
                onMoreAmenities()
              }}
            >
              Show less
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
