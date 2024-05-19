import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { selectAuth } from '@/features/auth/authSlice'
import { MainPage } from '@/pages/main-page/main-page'
import { urlPaths } from '@/router/urlPaths'
import { useGetCompanyTableQuery } from '@/service/tableCompanyApi'

export const MainPageContainer = memo(() => {
  const isAuth = useSelector(selectAuth).isAuth

  const { data, isLoading } = useGetCompanyTableQuery()

  if (!isAuth) {
    return <Navigate to={urlPaths.login} />
  }

  return <>{data && <MainPage data={data} isLoading={isLoading} />}</>
})
