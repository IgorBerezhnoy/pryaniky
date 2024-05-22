import { memo } from 'react'

import { AddItemForm } from '@/components/addItemForm/addItemForm'
import { Loader } from '@/components/loader'
import { Page } from '@/components/page'
import { TableCompany } from '@/components/tableCompany/tableCompany'
import { ResponseTypeTable } from '@/service/types'

import s from './main-page.module.scss'

export const MainPage = memo(({ data, isLoading }: Props) => {
  return (
    <Page>
      <h1 className={s.title}>Companies</h1>
      <AddItemForm />
      {isLoading && <Loader />}
      {data && <TableCompany items={data.data} />}
    </Page>
  )
})
type Props = { data: ResponseTypeTable; isLoading: boolean }
