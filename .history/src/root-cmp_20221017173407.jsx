import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/header/app-header'
import { AppFooter } from './cmps/app-footer'
import { UserDetails } from './pages/user-details'
import { StayEdit } from './pages/stay-edit'

export class RootCmp extends React.Component {
  render() {
    return (
      <div className="app  main-container">
        <AppHeader />
        <main>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact={true}
                element={route.component}
                path={route.path}
              />
            ))}
            <Route exact={true} element={<UserDetails />} path="/user/:id" />
          </Routes>
        </main>
        <AppFooter />
      </div>
    )
  }
}
