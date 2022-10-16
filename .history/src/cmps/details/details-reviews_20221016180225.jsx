import { React } from 'react'

export const DetailsReviews = ({ selectedStay }) => {
  return (
    <div className="container-reviews">
      {selectedStay.reviews.map((review, idx) => (
        <div>
          {idx < 6 && (
            <div className="card-preview-review" key={review.by._id}>
              <div className="preview-review">
                <div className="preview-review-by">
                  <div className="preview-review-by-avatar">
                    <img className="img-avatar" src={review.by.imgUrl} />
                  </div>
                  <div className="preview-review-by-descreption">
                    <h2>{review.by.fullname}</h2>
                    <h3>{review.at}</h3>
                  </div>
                </div>

                <div className="preview-review-txt">
                  <p>{review.txt}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="container-btn-reviews">
        <button className="btn btn-more-reviews">
          Show all {selectedStay.reviews.length} reviews
        </button>
      </div>
    </div>
  )
}
