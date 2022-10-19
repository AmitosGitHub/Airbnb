import * as React from 'react'

import { BiSearch } from 'react-icons/bi'
import { BiSliderAlt } from 'react-icons/bi'

export const MobileSearch = () => {
  const toggleSearch = () => {
    console.log('toggleSearch')
  }

  const toggleSearchFilter = () => {
    console.log('toggleSearchFilter')
  }

  return (
    <section className="mobile-search">
      <button
        className="btn-main-content-mobile-search"
        onClick={() => {
          toggleSearch()
        }}
      >
        <div className="btn btn-search-icon">
          <BiSearch className=" search-icon" />
        </div>

        <div className="main-content-mobile-search">
          <div className="top-content">
            <h2>Where to?</h2>
          </div>
          <div className="bottom-content">
            <ul>
              <li>Anywhere</li>
              <li>Any week</li>
              <li>Add guests</li>
            </ul>
          </div>
        </div>
      </button>

      <button
        className="btn-filter-mobile-search"
        onClick={() => {
          toggleSearchFilter()
        }}
      >
        <BiSliderAlt />
      </button>
    </section>
  )
}
