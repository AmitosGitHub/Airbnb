import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { stayService } from '../services/stay.service'
import { loadStays, setFilterBy } from '../store/stay.actions'
import { StayList } from '../cmps/home-page/stay-list'

import LoadingScreen from 'react-loading-screen'
import PulseLoader from 'react-spinners/PulseLoader'

export const Explore = () => {
  const { stays } = useSelector((state) => state.stayModule)
  const dispatch = useDispatch()
  const queryParams = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(() => {
      setIsLoading(!isLoading)
    }, 600)
    doLoadStays()
  }, [])

  useEffect(() => {
    doLoadStays()
  }, [queryParams])

  console.log('queryParams:', queryParams)

  const getParams = () => {
    if (queryParams.name) return queryParams
    else if (queryParams.type) return queryParams
    // {
    //   'amenities':{'Wifi':false ,'Washer':false ,'AirConditioning':false ,'Kitchen':false , }
    //   ,'price':0,
    //   'room':{bathrooms:0,bedrooms:0,roomType:''}}
    else {
      const amenities = queryParams.amenities.split('&&').map((item) => {
        const items = item.split('=')
        return { [items[0]]: items[1].trim() }
      })
      const room = queryParams.room.split('&&').map((item) => {
        const items = item.split('=')
        return { [items[0]]: items[1] }
      })

      console.log('amenities:', amenities)
      console.log('room:', room)
      return {
        amenities: {
          ...amenities[0],
          ...amenities[1],
          ...amenities[2],
          ...amenities[3],
        },
        room: { ...room[0], ...room[1], ...room[2] },
      }
    }
  }

  var params = getParams()

  const doLoadStays = () => {
    dispatch(loadStays(params))
  }

  const onRemoveStay = () => {
    console.log('remove!!!')
    stayService.remove()
  }

  if (isLoading) {
    return (
      <section className="sweet-loading">
        <PulseLoader color="#99a8a4" margin={7} size={16} />
      </section>
    )
  }
  return (
    <section className="explore main-layout">
      <StayList stays={stays} onRemoveStay={onRemoveStay} />
    </section>
  )
}
