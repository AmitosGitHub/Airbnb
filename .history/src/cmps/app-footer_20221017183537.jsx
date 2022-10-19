import React, { useState } from 'react'
import { connect } from 'react-redux'

import { UserMsg } from './user-msg.jsx'

function _AppFooter({ count }) {
  return (
    <footer className="app-footer ">
      <section className="top-footer">
        <div className="support">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>AirCover</li>
            <li>Our COVID-19 Response</li>
          </ul>
        </div>
        <div className="community">
          <h3>Community</h3>
          <ul>
            <li>Airbnb.org: disaster relief housing</li>
            <li>Support Afghan refugees</li>
            <li>Combating discrimination</li>
          </ul>
        </div>
        <div className="hosting">
          <h3>Hosting</h3>
          <ul>
            <li>Try hosting</li>
            <li>AirCover for Hosts</li>
            <li>Explore hosting resources</li>
          </ul>
        </div>
        <div className="airbnb">
          <h3>Airbnb</h3>
          <ul>
            <li>Newsroom</li>
            <li>Learn about new features</li>
            <li>Letter from our founders</li>
          </ul>
        </div>
      </section>
      <section className="bottom-footer">
        <ul className="bottom-footer-copy">
          <li>© 2022 Airbnb, Inc.·</li>
          <li>Privacy·</li>
          <li>Terms·</li>
          <li>Sitemap</li>
        </ul>
        <ul className="bottom-footer-social">
          <li>facbook</li>
          <li>twitter</li>
          <li>instagram</li>
        </ul>
      </section>
    </footer>
  )
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = {}

export const AppFooter = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AppFooter)
