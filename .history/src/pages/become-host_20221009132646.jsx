import * as React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { utilService } from '../services/util.service.js'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { ImgUploader } from '../cmps/img-uploader'
import { addStay } from '../store/stay.actions.js'
import { updateUser } from '../store/user.actions.js'

import { FaAirbnb } from 'react-icons/fa'

const theme = createTheme()

export const BecomeHost = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    fullname: '',
  })
  const [isTryhosting, setIsTryhosting] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.userModule)

  useEffect(() => {
    setIsTryhosting(false)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      namePlace: data.get('namePlace'),
      price: data.get('price'),
      country: data.get('country'),
      city: data.get('city'),
      address: data.get('address'),
    })
    const newStay = {
      name: data.get('namePlace'),
      type: 'National parks',
      imgUrls: [
        'http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg',
        'http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg',
        'http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436496/ihozxprafjzuhil9qhh4.jpg',
        'http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436952/aef9ajipinpjhkley1e3.jpg',
        'http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436948/vgfxpvmcpd2q40qxtuv3.jpg',
      ],
      price: +data.get('price'),
      summary:
        'Westin Kaanapali Ocean Resort Villas North timeshare - Pay resort: $14-20/day, stays under 7 night $38/res - Inquire about availability, I review then offer/approve if available :) - READ "The Space" for cleaning/etc AND brief explngation about timeshare reservations - Want guaranteed view for additional cost? Must be weekly rental, other restrictions - Wheelchair accessible / ADA, call resort directly to ensure U receive. If U need ADA U MUST inform us BEFORE booking.',
      capacity: 8,
      amenities: ['TV', 'Cable TV', 'Internet', 'Wifi', 'Air conditioning'],
      bathrooms: 2,
      bedrooms: 2,
      roomType: 'Entire home/apt',
      loc: {
        country: data.get('country'),
        countryCode: data.get('country'),
        city: data.get('city'),
        address: data.get('address'),
        lat: 32.05995,
        lng: 34.77239,
      },
      host: {
        _id: utilService.makeId(24),
        id: user._id,
        fullname: user.fullname,
        thumbnailUrl: user.imgUrl,
        pictureUrl: user.imgUrl,
        isSuperhost: true,
      },

      reviews: [
        {
          at: '2016-06-12T04:00:00.000Z',
          by: {
            _id: '622f3407e36c59e6164fc004',
            fullname: 'Kiesha',
            imgUrl: 'https://robohash.org/10711825?set=set1',
            id: '10711825',
          },
          txt: 'I had a great experience working with Patty and Peter.  Both were very attentive in sorting out the booking details and following up directly when I had questions.  I rented a 2 bedroom unit at the Westin Villas  in Maui and both the unit and property was absolutely amazing.  I think we had the best unit on the resort complete with 2 outdoor patios with direct access  to  the  beach.  I would HIGHLY recommend renting with Patty and Peter.',
        },
        {
          at: '2016-07-28T04:00:00.000Z',
          by: {
            _id: '622f3403e36c59e6164fb204',
            fullname: 'Chris',
            imgUrl: 'https://robohash.org/70072865?set=set1',
            id: '70072865',
          },
          txt: 'Peter quickly responded to any questions I had before, and during the trip. Will use again, highly recommend. ',
        },
        {
          at: '2016-09-11T04:00:00.000Z',
          by: {
            _id: '622f3405e36c59e6164fb703',
            fullname: 'Kim',
            imgUrl: 'https://robohash.org/71179725?set=set1',
            id: '71179725',
          },
          txt: 'We had the perfect location for a room, first floor right in front of the pool. The resort is beautiful, and the staff is so friendly! I enjoyed it so much, we talked about buying a timeshare ourselves.',
        },
      ],

      likedByUsers: [],
    }

    // console.log('addStay:',addStay)
    dispatch(addStay(newStay)).then(() => {
      console.log('yessssss!!!!!')
      //   navigate('/')
    })

    dispatch(updateUser(user)).then(() => {
      console.log('yessssss!!!!!')
      //   navigate('/')
    })
  }

  const onUploaded = (imgUrl) => {
    setCredentials({ ...credentials, imgUrl })
  }

  return (
    <section className="become-host main-layout">
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'pink' }}>
                <FaAirbnb />
              </Avatar>
              <Typography component="h1" variant="h5">
                {!isTryhosting &&
                  `
              Open your door
                to hosting`}
                {isTryhosting && 'Tell us about your place'}
              </Typography>
              {!isTryhosting && (
                <Button
                  className="btn btn-try-host"
                  onClick={() => {
                    setIsTryhosting(!isTryhosting)
                  }}
                >
                  Try hosting
                </Button>
              )}
              {isTryhosting && (
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="namePlace"
                    label="Name of place"
                    name="namePlace"
                    autoComplete="namePlace"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="price"
                    label="Price"
                    type="price"
                    id="price"
                    autoComplete="price"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="country"
                    label="Country"
                    type="country"
                    id="country"
                    autoComplete="country"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="city"
                    label="City"
                    type="city"
                    id="city"
                    autoComplete="city"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    type="address"
                    id="address"
                    autoComplete="address"
                  />

                  <ImgUploader onUploaded={onUploaded} />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Become a Host
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </section>
  )
}
