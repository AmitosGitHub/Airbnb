import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  DashboardTableNewOrder,
  DashboardTableOldOrder,
} from '../cmps/dashboard/dashboard-table'
import { DoughnutChart, LineChart } from '../cmps/dashboard/dashboard-chart'

export const Dashboard = () => {
  const { selectedStay } = useSelector((state) => state.stayModule)

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
