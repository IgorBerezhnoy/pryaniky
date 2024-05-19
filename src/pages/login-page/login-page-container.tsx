import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { selectAuthIsAuth } from '@/features/auth/authSlice'
import { LoginPage } from '@/pages/login-page/login-page'

export const LoginPageContainer = memo(() => {
  const isAuth = useSelector(selectAuthIsAuth)

  if (isAuth) {
    return <Navigate to={'/'} />
  }

  return <LoginPage />
})
