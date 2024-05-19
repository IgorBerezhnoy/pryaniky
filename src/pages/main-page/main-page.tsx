import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { Page } from '@/components/page'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/table'
import { tableHeader } from '@/constatns/tableHeader'
import { selectAuth } from '@/features/auth/authSlice'
import { urlPaths } from '@/router/urlPaths'
import { useGetCompanyTableQuery } from '@/service/tableCompanyApi'
import { formatDate } from '@/utils'

export const MainPage = () => {
  const isAuth = useSelector(selectAuth).isAuth

  const { data, isLoading } = useGetCompanyTableQuery()

  if (!isAuth) {
    return <Navigate to={urlPaths.login} />
  }
  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log()
  }

  return (
    <Page>
      <h1>Main Page</h1>
      <form onSubmit={onSubmit}>
        <input type={'text'} />
        <input type={'submit'} />
      </form>
      {isLoading && <h1>Loading...</h1>}
      {data && (
        <Table>
          <TableHeader columns={tableHeader} />
          <TableBody>
            {data.data.map(el => {
              return (
                <TableRow key={el.id}>
                  <TableCell>{formatDate(el.companySigDate)}</TableCell>
                  <TableCell>{el.companySignatureName}</TableCell>
                  <TableCell>{el.documentName}</TableCell>
                  <TableCell>{el.documentStatus}</TableCell>
                  <TableCell>{el.documentType}</TableCell>
                  <TableCell>{el.employeeNumber}</TableCell>
                  <TableCell>{formatDate(el.employeeSigDate)}</TableCell>
                  <TableCell>{el.employeeSignatureName}</TableCell>
                  <TableCell>icons</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </Page>
  )
}
