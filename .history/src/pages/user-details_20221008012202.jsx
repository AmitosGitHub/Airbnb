import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../store/user.actions'
import { stayService } from '../services/stay.service'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service'
import { StayList } from '../cmps/home-page/stay-list'
import { orderService } from '../services/order.service'
export function _UserDetails({ user, loadUser }) {
  const params = useParams()
  console.log('hello')
  var [user, setUser] = useState(null)
  var [userStays, setUserStays] = useState([])
  var [userOrders, setUserOrders] = useState([])
  var [userStaysOrders, setUserStaysOrders] = useState([])

  const loggedInUser = userService.getLoggedinUser()
  const profileUserId = params.id

  useEffect(() => {
    async function getUser() {
      user = await userService.getById(profileUserId)
      setUser(user)
      loadStaysForUser()
      loadOrdersForUser()
      loadOrdersForUserStays()
    }
    getUser()
  }, [])

  async function loadStaysForUser() {
    try {
      const stays = await stayService.query()
      console.log('loggedInUser', loggedInUser)
      const userStays = stays.filter((stay) => stay.host._id === profileUserId)
      setUserStays(userStays)
    } catch (err) {
      showErrorMsg('Cannot load stays')
      console.log('Cannot load stays', err)
    }
  }

  async function loadOrdersForUser() {
    try {
      const orders = await orderService.query()
      console.log('orders', orders)
      console.log('loggedInUser', loggedInUser)
      const userOrders = orders.filter(
        (order) => order.buyer._id === profileUserId
      )
      setUserOrders(userOrders)
    } catch (err) {
      showErrorMsg('Cannot load orders')
      console.log('Cannot load orders', err)
    }
  }

  async function loadOrdersForUserStays() {
    try {
      const orders = await orderService.query()
      console.log('orders', orders)
      console.log('loggedInUser', loggedInUser)
      const userStaysOrders = orders.filter(
        (order) => order.hostId === profileUserId
      )
      setUserStaysOrders(userStaysOrders)
    } catch (err) {
      showErrorMsg('Cannot load orders')
      console.log('Cannot load orders', err)
    }
  }

  return (
    <section className="user-details main-layout">
      <h1>User Details123</h1>
      <div className="host-avatar-container">
        <img
          src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg"
          className="host-avatar"
        ></img>
      </div>
      {user && (
        <section>
          <section className="user-stays">
            <h3>{user.fullname} stays:</h3>
            {/* <pre>
              {JSON.stringify(userStays, null, 2)}
            </pre> */}

            <StayList stays={userStays} />
          </section>

          <section className="user-orders">
            {userOrders && <h3>{user.fullname} ,your orders are:</h3>}

            {/* <pre>
              {JSON.stringify(userOrders, null, 2)}
            </pre> */}
            <section className="order-details-container">
              {userOrders.map((userOrder) => (
                <div className="order-details-li" key={userOrder._id}>
                  <div>{userOrder.stay.name}</div>
                  <div>
                    {userOrder.startDate}-{userOrder.endDate}
                  </div>
                  <div>{userOrder.guests.adults}</div>
                  <div>{userOrder.totalPrice}</div>
                  <div>{userOrder.status}</div>
                  <button>Cancel</button>
                </div>
              ))}
            </section>
          </section>

          <section className="user-stays-reserved">
            <h3>{user.fullname} reserved stays:</h3>

            {/* <pre>
              {JSON.stringify(userStaysOrders, null, 2)}
            </pre> */}
            <section className="order-details-container">
              {userStaysOrders.map((userStaysOrder) => (
                <div className="order-details-li" key={userStaysOrder._id}>
                  <div>{userStaysOrder.stay.name}</div>
                  <div>
                    {userStaysOrder.startDate}-{userStaysOrder.endDate}
                  </div>
                  <div>{userStaysOrder.guests.adults}</div>
                  <div>{userStaysOrder.totalPrice}</div>
                  <div>{userStaysOrder.status}</div>
                  <button>Cancel</button>
                </div>
              ))}
            </section>
          </section>

          <pre>{JSON.stringify(user, null, 2)}</pre>
        </section>
      )}
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userModule.watchedUser,
    loggedInUser: state.userModule.user,
  }
}
const mapDispatchToProps = {
  loadUser,
}

export const UserDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_UserDetails)
