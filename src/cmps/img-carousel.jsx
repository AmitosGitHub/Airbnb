import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'

export function ImgCarousel({ imgUrls }) {
  // console.log('imgUrls', imgUrls)
  return (
    <Carousel showThumbs={false} showStatus={false}>
      {imgUrls.map((imgUrl, idx) => (
        <div className="preview-img-container" key={idx}>
          <img className="preview-img" src={imgUrl} />
        </div>
      ))}
    </Carousel>
  )
}

// ReactDOM.render(<ImgCarousel />, document.querySelector('.demo-carousel'))

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

// {imgUrls.map((imgUrl, idx) => {
//     <div key={idx}>
//         <div className='user-img' style={{ backgroundImage: `${imgUrl}` }}> </div>
//         <p className="legend">Legend 1</p>
//     </div>
// })}
/* <div>
    <div className='user-img' style={{ backgroundImage: `${stay.imgUrls[idx]}` }}> </div>
    <p className="legend">Legend 1</p>
</div>
*/
