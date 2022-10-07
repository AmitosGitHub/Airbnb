import { React } from 'react'

export const HeaderDetails = ({ selectedStay }) => {
  return (
    <header>
      <section className="header-details top-header">
        <div className="top-header-details-description">
          <h2>{selectedStay.name}</h2>
        </div>

        <div className="bottom-header-details-btn-action">
          <div className="bottom-header-details-description">
            <h4>
              ⭑ 5.0 {selectedStay.reviews.length}reviews {selectedStay.loc.city}
              ,{selectedStay.loc.country}
            </h4>
          </div>

          <div className="details-btn-action">
            <div className="btn-link link-share">
              <h2>img</h2>
              <button className="btn btn-details-action">Share</button>
            </div>

            <div className="btn-link link-save">
              <h2>img</h2>
              <button className="btn btn-details-action">Save</button>
            </div>
          </div>
        </div>
      </section>

      <section className="details-gallery hero">
        <div className="img-center">
          <img src={selectedStay.imgUrls[0]} />
        </div>
        <div className="img-2">
          <img src={selectedStay.imgUrls[1]} />
        </div>
        <div className="img-3">
          <img src={selectedStay.imgUrls[2]} />
        </div>
        <div className="img-4">
          <img src={selectedStay.imgUrls[3]} />
        </div>
        <div className="img-5">
          <img src={selectedStay.imgUrls[4]} />
        </div>
      </section>
    </header>
  )
}
