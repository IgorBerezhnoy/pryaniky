import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { AddItemForm } from '@/components/addItemForm/addItemForm'
import { Page } from '@/components/page'
import { TableCompany } from '@/components/tableCompany/tableCompany'
import { selectAuth } from '@/features/auth/authSlice'
import { urlPaths } from '@/router/urlPaths'
import { useGetCompanyTableQuery } from '@/service/tableCompanyApi'

export const MainPage = () => {
  const isAuth = useSelector(selectAuth).isAuth

  const { data, isLoading } = useGetCompanyTableQuery()

  if (!isAuth) {
    return <Navigate to={urlPaths.login} />
  }

  return (
    <Page>
      <h1>Main Page</h1>
      <AddItemForm />
      {isLoading && <h1>Loading...</h1>}
      {data && <TableCompany items={data.data} />}
    </Page>
  )
}
