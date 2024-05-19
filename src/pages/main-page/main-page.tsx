import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { Page } from '@/components/page'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/table'
import { tableHeader } from '@/constatns/tableHeader'
import { selectAuth } from '@/features/auth/authSlice'
import { urlPaths } from '@/router/urlPaths'
import { API_GET_TABLE } from '@/service/api'
import { RootObResponseTypeTable, TableItem } from '@/service/types'
import { getCookie } from '@/utils'

export const MainPage = () => {
  const [data, setData] = useState<TableItem[]>([])
  const isAuth = useSelector(selectAuth).isAuth

  useEffect(() => {
    fetch(API_GET_TABLE, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth': getCookie('token'),
      },
    })
      .then(res => res.json())
      .then((res: RootObResponseTypeTable) => {
        setData(res.data)
      })
  }, [])
  if (!isAuth) {
    return <Navigate to={urlPaths.login} />
  }

  return (
    <Page>
      <Table>
        <TableHeader columns={tableHeader} />
        <TableBody>
          {data.map(el => {
            return (
              <TableRow key={el.id}>
                <TableCell>{el.companySigDate}</TableCell>
                <TableCell>{el.companySignatureName}</TableCell>
                <TableCell>{el.documentName}</TableCell>
                <TableCell>{el.documentStatus}</TableCell>
                <TableCell>{el.documentType}</TableCell>
                <TableCell>{el.employeeNumber}</TableCell>
                <TableCell>{el.employeeSigDate}</TableCell>
                <TableCell>{el.employeeSignatureName}</TableCell>
                <TableCell>icons</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Page>
  )
}
