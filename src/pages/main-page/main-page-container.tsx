import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { selectAuth } from '@/features/auth/authSlice'
import { MainPage } from '@/pages/main-page/main-page'
import { urlPaths } from '@/router/urlPaths'
import { useGetCompanyTableQuery } from '@/service/tableCompanyApi'

export const MainPageContainer = memo(() => {
  const isAuth = useSelector(selectAuth).isAuth

  const { data, error, isLoading } = useGetCompanyTableQuery()

  if (error) {
    toast('Упс произошла ошибка', { position: 'bottom-left', type: 'error' })
  }
  if (!isAuth) {
    return <Navigate to={urlPaths.login} />
  }

  return <>{data && <MainPage data={data} isLoading={isLoading} />}</>
})
