import { memo } from 'react'
import { useSelector } from 'react-redux'

import { MainHeader } from '@/components/header/mainHeader'
import { selectAppLoading } from '@/features/app/appSlice'
import { selectAuth, setAuth } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { deleteCookie } from '@/utils'

export const MainHeaderContainer = memo(() => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(selectAppLoading)
  const isAuth = useSelector(selectAuth).isAuth
  const logOutHandler = () => {
    deleteCookie('token')

    dispatch(setAuth(false))
  }

  return <MainHeader isAuth={isAuth} isLoading={isLoading} logOutHandler={logOutHandler} />
})
