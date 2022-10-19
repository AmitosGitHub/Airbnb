import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//---------ICONS-------------

import AmazingPools from '../../assets/img/img-icon-carousel/AmazingPools.jpeg'
import AmazingViews from '../../assets/img/img-icon-carousel/AmazingViews.jpeg'
import Arctic from '../../assets/img/img-icon-carousel/Arctic.jpeg'
import Beach from '../../assets/img/img-icon-carousel/Beach.jpeg'
import Beachfront from '../../assets/img/img-icon-carousel/Beachfront.jpeg'
import Cabins from '../../assets/img/img-icon-carousel/Cabins.jpeg'
import Camping from '../../assets/img/img-icon-carousel/Camping.jpeg'
import Castles from '../../assets/img/img-icon-carousel/Castles.jpeg'
import Caves from '../../assets/img/img-icon-carousel/Caves.jpeg'
import Countryside from '../../assets/img/img-icon-carousel/Countryside.jpeg'
import Desert from '../../assets/img/img-icon-carousel/Desert.jpeg'
import Design from '../../assets/img/img-icon-carousel/Design.jpeg'
import Domes from '../../assets/img/img-icon-carousel/Domes.jpeg'
import Farms from '../../assets/img/img-icon-carousel/Farms.jpeg'
import Islands from '../../assets/img/img-icon-carousel/Islands.jpeg'
import Lakefront from '../../assets/img/img-icon-carousel/Lakefront.jpeg'
import Luxe from '../../assets/img/img-icon-carousel/Luxe.jpeg'
import NationalParks from '../../assets/img/img-icon-carousel/NationalParks.jpeg'
import OMG from '../../assets/img/img-icon-carousel/OMG.jpeg'
import Surfing from '../../assets/img/img-icon-carousel/Surfing.jpeg'
import Towers from '../../assets/img/img-icon-carousel/Towers.jpeg'
import Tropical from '../../assets/img/img-icon-carousel/Tropical.jpeg'
import Yurts from '../../assets/img/img-icon-carousel/Yurts.jpeg'

export class AppFilter extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 12,
      slidesToScroll: 10,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1324,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 8,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
      ],
    }
    return (
      <section className="container-carousel">
        <div className="main-carousel">
          <Slider {...settings}>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <div className="content-carousel">
                <img src={AmazingPools} />
                <h4>Amazing pools</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Amazing views`}>
              <div className="content-carousel">
                <img src={AmazingViews} />
                <h4>Amazing views</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Arctic`}>
              <div className="content-carousel">
                <img src={Arctic} />
                <h4>Arctic</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Beach`}>
              <div className="content-carousel">
                <img src={Beach} />
                <h4>Beach</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Beachfront`}>
              <div className="content-carousel">
                <img src={Beachfront} />
                <h4>Beachfront</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Cabins`}>
              <div className="content-carousel">
                <img src={Cabins} />
                <h4>Cabins</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Camping`}>
              <div className="content-carousel">
                <img src={Camping} />
                <h4>Camping</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Castles`}>
              <div className="content-carousel">
                <img src={Castles} />
                <h4>Castles</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Caves`}>
              <div className="content-carousel">
                <img src={Caves} />
                <h4>Caves</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Countryside`}>
              <div className="content-carousel">
                <img src={Countryside} />
                <h4>Countryside</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Desert`}>
              <div className="content-carousel">
                <img src={Desert} />
                <h4>Desert</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Design`}>
              <div className="content-carousel">
                <img src={Design} />
                <h4>Design</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Domes`}>
              <div className="content-carousel">
                <img src={Domes} />
                <h4>Domes</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Farms`}>
              <div className="content-carousel">
                <img src={Farms} />
                <h4>Farms</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Islands`}>
              <div className="content-carousel">
                <img src={Islands} />
                <h4>Islands</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Lakefront`}>
              <div className="content-carousel">
                <img src={Lakefront} />
                <h4>Lakefront</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Luxe`}>
              <div className="content-carousel">
                <img src={Luxe} />
                <h4>Luxe</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/National parks`}>
              <div className="content-carousel">
                <img src={NationalParks} />
                <h4>National parks</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/OMG`}>
              <div className="content-carousel">
                <img src={OMG} />
                <h4>OMG!</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Surfing`}>
              <div className="content-carousel">
                <img src={Surfing} />
                <h4>Surfing</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Towers`}>
              <div className="content-carousel">
                <img src={Towers} />
                <h4>Towers</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Tropical`}>
              <div className="content-carousel">
                <img src={Tropical} />
                <h4>Tropical</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/type/Yurts`}>
              <div className="content-carousel">
                <img src={Yurts} />
                <h4>Yurts</h4>
              </div>
            </Link>
          </Slider>
        </div>
      </section>
    )
  }
}
