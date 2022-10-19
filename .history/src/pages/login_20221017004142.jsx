import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import {
  onLogin,
  onLogout,
  onSignup,
  loadUsers,
  removeUser,
} from '../store/user.actions.js'

const theme = createTheme()

export const LogInApp = () => {
  const { user, msg } = useSelector((state) => state.userModule)
  console.log('user:', user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLogIn = useParams().login === 'log-in' ? true : false

  useEffect(() => {
    console.log(' msg:', msg)
    if (user && msg === 'Successfully') {
      console.log('shallloooo,,,,,,')
      setTimeout(() => {
        navigate(`/`)
      }, 500)
    }
  }, [msg, user])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const credentials = {
      fullname: data.get('fullname'),
      password: data.get('password'),
      email: isLogIn ? '' : data.get('email'),
      country: isLogIn ? '' : data.get('country'),
    }

    if (isLogIn) {
      dispatch(onLogin(credentials))
    } else {
      dispatch(onSignup(credentials))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            {isLogIn ? 'Log in' : 'Sign up'}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullname"
              label="Fullname"
              name="fullname"
              autoComplete="fullname"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {!isLogIn && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            )}
            {!isLogIn && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="country"
                label=" Country"
                name="country"
                autoComplete="country"
                autoFocus
              />
            )}
            {msg}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLogIn ? 'Log in' : 'Sign up'}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

// import React from 'react'
// import { useEffect, useState, useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { NavLink, useParams, useLocation } from 'react-router-dom'

// import {
//   onLogin,
//   onLogout,
//   onSignup,
//   loadUsers,
//   removeUser,
// } from '../store/user.actions.js'

// export const LogInApp = () => {
//   //   const [user, setUser] = useState({ name: 'puki', id: 'u102', imgUrl: '🥸' })
//   const [user, setUser] = useState(false)
//   return (
//     <section className="login-app">
//       <ul>
//         <li>sign up</li>
//         <li>log in</li>
//       </ul>
//       {user && (
//         <span className="user-info">
//           <Link to={`user/${user._id}`}>
//             {user.imgUrl && <img src={user.imgUrl} />}
//             {user.fullname}
//           </Link>
//           <span className="score">{user.score?.toLocaleString()}</span>
//           <button onClick={onLogout}>Logout</button>
//         </span>
//       )}

//       {!user && (
//         <section className="user-info">
//           <LoginSignup onLogin={onLogin} onSignup={onSignup} />
//         </section>
//       )}
//     </section>
//   )
// }
