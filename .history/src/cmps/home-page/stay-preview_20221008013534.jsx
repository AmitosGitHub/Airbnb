import { Link } from 'react-router-dom'
import { utilService } from '../../services/util.service'
import { userService } from '../../services/user.service'
import { ImgCarousel } from '../cmps/img-carousel'
import { LikeBtn } from '../cmps/like-btn'

export function StayPreview({ stay, onRemoveStay, onUpdateStay }) {
  const loggedinUser = userService.getLoggedinUser()
  const loggedinUserLoc = { lat: 32.109333, lng: 34.855499 }

  const measure = (lat1, lon1, lat2, lon2) => {
    // if (window.navigator.geolocation) {
    //     console.log(' Geolocation available',window.navigator.geolocation.getCurrentPosition())
    //    }

    var R = 6378.137 // Radius of earth in KM
    var dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180
    var dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    var d = R * c
    return d * 1000 // meters
  }
  const destination = measure(
    loggedinUserLoc.lat,
    loggedinUserLoc.lng,
    stay.loc.lat,
    stay.loc.lng
  )
  // const loggedinUser=''
  // console.log('stay.owner',loggedinUser)
  return (
    <div className="stay-preview">
      <div className="preview-img-container">
        <ImgCarousel imgUrls={stay.imgUrls} />
        {/* <img className='preview-img' src='https://a0.muscache.com/im/pictures/47d23608-568e-4a1d-b2c0-5cd74a20bc22.jpg?im_w=1200' alt="" /> */}
        <div className="like-btn-preview-container">
          <LikeBtn />
        </div>
      </div>

      <Link to={`/stay/${stay._id}`} className="info">
        <div className="preview-text-container">
          <section className="preview-title-container">
            <div className="preview-title">
              <span>{stay.loc.city}</span>,<span>{stay.loc.country}</span>
            </div>
            <div>
              <img
                className="preview-star-img"
                src="https://stayinn-vacation.herokuapp.com/assets/star.692b808f.svg"
                alt=""
              />
              <span>{stay.rate}</span>
            </div>
          </section>

          <section className="preview-details-container">
            <p>
              <small>{stay.type}</small>
            </p>
            <small>
              <span>{(destination / 1000).toLocaleString()}</span>
              <span>kilometers</span>
            </small>
          </section>

          <span className="price">
            {' '}
            <span>${stay.price.toLocaleString()}</span> night
          </span>
          {/* <p><small>{utilService.getFormattedTime(new Date(stay.createdAt))}</small></p> */}
        </div>
      </Link>
    </div>
  )
}
