import { useEffect, useState } from 'react'

import { Page } from '@/components/page'
import { API_GET_TABLE, RootObResponseTypeTable, TableItem } from '@/service/api'
import { getCookie } from '@/utils'

export const MainPage = () => {
  const [data, setData] = useState<TableItem[]>([])

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

  return (
    <Page>
      {data.map(el => {
        return (
          <div key={el.id}>
            <div>{el.companySigDate}</div>
            <div>{el.companySignatureName}</div>
            <div>{el.documentName}</div>
            <div>{el.documentStatus}</div>
            <div>{el.documentType}</div>
            <div>{el.employeeNumber}</div>
            <div>{el.employeeSigDate}</div>
            <div>{el.employeeSignatureName}</div>
            <div>____________________</div>
          </div>
        )
      })}
    </Page>
  )
}
