import * as React from 'react'

export const DashboardTableNewOrder = ({ selectedStay }) => {
  console.log('selectedStay:', selectedStay)
  console.log('selectedStay.reservation[0]:', selectedStay.reservation[0])
  const dataUser = [
    {
      _id: '' + selectedStay.reservation.user._id,
      fullname: '' + selectedStay.reservation[0].user.fullname,
      price: +selectedStay.reservation[0].price,
      dates: '' + selectedStay.reservation[0].dates,
      username: '75091961',
      password: 'Margaux',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/4.jpg',
      isAdmin: false,
    },
    {
      _id: 'u104',
      fullname: 'Margaux',
      username: '75091961',
      password: 'Margaux',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/4.jpg',
      isAdmin: false,
    },
    {
      _id: 'u109',
      fullname: 'Roti',
      username: '75091968',
      password: '1234',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/3.jpg',
      isAdmin: false,
    },
    {
      _id: 'u110',
      fullname: 'Francine',
      username: '75091969',
      password: 'Francine',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
      isAdmin: false,
    },
  ]

  return (
    <section className="dashboard-table-new-order">
      <table>
        <thead>
          <tr>
            <td colspan="10">New Order</td>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((user) => (
            <tr className="preview-user" key={user._id}>
              <td>
                <button
                  className="btn-approve"
                  onClick={() => {
                    console.log('hiii btn approve')
                  }}
                >
                  confirm
                </button>
              </td>
              <td>
                <button
                  className="btn-refuse"
                  onClick={() => {
                    console.log('hiii btn refuse')
                  }}
                >
                  reject
                </button>
              </td>
              <td>
                <img className="img-avatar" src={user.imgUrl} />
              </td>
              <td>{user._id}</td>
              <td>{user.fullname}</td>
              <td>
                {user.dates.checkIn}/{user.dates.checkOut}
              </td>
              <td>{user.price}</td>
              <td>
                <button
                  className="btn-order btn-commit"
                  onClick={() => {
                    console.log('hiii btn')
                  }}
                >
                  commit
                </button>
              </td>
              <td>
                <button
                  className="btn-order btn-conection"
                  onClick={() => {
                    console.log('hiii btn')
                  }}
                >
                  connection
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export const DashboardTableOldOrder = () => {
  const dataUser = [
    {
      _id: 'u101',
      fullname: 'Puki',
      username: 'puki',
      password: '1234',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg',
      isAdmin: true,
    },
    {
      _id: 'u102',
      fullname: 'Edgar',
      username: '75091963',
      password: 'Edgar',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
      isAdmin: false,
    },
    {
      _id: 'u103',
      fullname: 'Leo',
      username: '75091962',
      password: 'Leo',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
      isAdmin: false,
    },
    {
      _id: 'u104',
      fullname: 'Margaux',
      username: '75091961',
      password: 'Margaux',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/male/4.jpg',
      isAdmin: false,
    },
    {
      _id: 'u109',
      fullname: 'Roti',
      username: '75091968',
      password: '1234',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/3.jpg',
      isAdmin: false,
    },
    {
      _id: 'u110',
      fullname: 'Francine',
      username: '75091969',
      password: 'Francine',
      imgUrl: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
      isAdmin: false,
    },
  ]

  return (
    <section className="dashboard-table-old-order">
      <table>
        <thead>
          <tr>
            <td colspan="8">Old Order</td>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((user) => (
            <tr className="preview-user" key={user._id}>
              <td>
                <img className="img-avatar" src={user.imgUrl} />
              </td>
              <td>{user._id}</td>
              <td>{user.fullname}</td>
              <td>status</td>
              <td>date</td>
              <td>price</td>
              <td>
                <button
                  className="btn-order btn-reviews"
                  onClick={() => {
                    console.log('hiii btn reviews')
                  }}
                >
                  reviews
                </button>
              </td>
              <td>
                <button
                  className="btn-order btn-conection"
                  onClick={() => {
                    console.log('hiii btn')
                  }}
                >
                  conection
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
