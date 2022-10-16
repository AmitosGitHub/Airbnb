import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  DashboardTableNewOrder,
  DashboardTableOldOrder,
} from '../cmps/dashboard/dashboard-table'
import { DoughnutChart, LineChart } from '../cmps/dashboard/dashboard-chart'
import { getStayById } from '../store/stay.actions.js'
import PulseLoader from 'react-spinners/PulseLoader'

export const Dashboard = () => {
  const { user } = useSelector((state) => state.userModule)
  const { selectedStay } = useSelector((state) => state.stayModule)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('user.stayId:', user.stayId)
    dispatch(getStayById(user.stayId))
    console.log('selectedStay', selectedStay)
    console.log(' user:', user)
  }, [selectedStay, user])

  if (!selectedStay) {
    return (
      <section className="sweet-loading">
        <PulseLoader color="#99a8a4" margin={7} size={16} />
      </section>
    )
  }

  return (
    <section className="container-dashboard main-layout">
      <div className="header-dashboard">
        <h1>Dashboard</h1>
      </div>

      <div className="dashboard-chart-total">
        <div className="dashboard-chart">
          <div className="dashboard-line-chart">
            <LineChart />
          </div>
          <div className="dashboard-doughnut-chart">
            <DoughnutChart />
          </div>

          <div className="dashboard-total">
            <h2>Total:</h2>
            <h3>$2000</h3>
          </div>
        </div>
      </div>

      <div className="dashboard-table">
        <DashboardTableNewOrder selectedStay={selectedStay} />
        <DashboardTableOldOrder selectedStay={selectedStay} />
      </div>
    </section>
  )
}
