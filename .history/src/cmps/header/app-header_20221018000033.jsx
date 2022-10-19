import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import routes from '../../routes'

import { AppFilter } from '../header/app-filter'
import { ModalFilter } from '../header/modal-filter'
import { SimpelSearch } from '../header/simpel-search'
import { MainSearch } from '../header/main-search'
import { DisplayMainSearch } from '../header/display-main-search'
import { AppUser } from '../header/app-user'

import { FaAirbnb } from 'react-icons/fa'

export const AppHeader = () => {
  const [isOpenUser, setIsOpenUser] = useState(false)
  const [isOpenMainSearch, setIsOpenMainSearch] = useState(true)
  // const [isOpenDetails, setIsOpenDetails] = useState(false)

  let location = useLocation()

  const toggleSearch = () => {
    setIsOpenMainSearch(!isOpenMainSearch)
  }

  const isOpenDetails = () => {
    const strParams = location.pathname
    const params = strParams.split('/')
    return params.length === 3 && params[2] !== 'edit'
  }

  return (
    <header className="app-header ">
      {/* <div className="app-header"> */}
      <div className="top-header">
        <div className="top-top-header">
          <NavLink key="//" to="/">
            <div
              className="main-logo"
              onClick={() => {
                toggleSearch()
              }}
            >
              <h1>
                <FaAirbnb />
              </h1>
              <h1>Travelo</h1>
            </div>
          </NavLink>

          {isOpenMainSearch && !isOpenDetails() && (
            <MainSearch toggleSearch={toggleSearch} />
          )}
          {isOpenDetails() && <SimpelSearch />}
        </div>
        <div className="top-bottom-header">
          {!isOpenMainSearch && !isOpenDetails() && <DisplayMainSearch />}
        </div>

        <AppUser />
      </div>

      <div className="bottom-header">
        {isOpenMainSearch && !isOpenDetails() && <AppFilter />}
        {isOpenMainSearch && !isOpenDetails() && (
          <div className="btn-filter">
            <ModalFilter />
          </div>
        )}
      </div>
      {/* </div> */}
    </header>
  )
}
