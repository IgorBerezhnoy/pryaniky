import { memo } from 'react'

import { AddItemForm } from '@/components/addItemForm/addItemForm'
import { Page } from '@/components/page'
import { TableCompany } from '@/components/tableCompany/tableCompany'
import { ResponseTypeTable } from '@/service/types'

export const MainPage = memo(({ data, isLoading }: Props) => {
  return (
    <Page>
      <h1>Main Page</h1>
      <AddItemForm />
      {isLoading && <h1>Loading...</h1>}
      {data && <TableCompany items={data.data} />}
    </Page>
  )
})
type Props = { data: ResponseTypeTable; isLoading: boolean }
